import getIdFromTitle from '@/utils/getIdFromTitle'
import './Select.scss'
import classNames from 'classnames'
import { useRef, useState, useCallback, type ChangeEvent } from 'react'
import useSelectKeyboard from '@/hooks/useSelectKeyboard'
import useDropdownPosition from '@/hooks/useDropdownPosition'
import useMatchMedia from '@/hooks/useMatchMedia'
import useClickOutside from '@/hooks/useClickOutside'

export type Option = {
  id: number
  value: string
  isSelected?: boolean
}

interface SelectProps {
  id?: string
  label: string
  isLabelHidden?: boolean
  options: Option[]
  buttonClassName?: string
}

const stateClasses = {
  isExpanded: 'is-expanded',
  isSelected: 'is-selected',
  isCurrent: 'is-current',
  isOnTheLeftSide: 'is-on-the-left-side',
  isOnTheRightSide: 'is-on-the-right-side',
}

const Select = ({
  label,
  id = getIdFromTitle(label),
  isLabelHidden = true,
  options,
  buttonClassName,
}: SelectProps) => {
  const getInitialIndex = () => {
    const index = options.findIndex(({ isSelected }) => isSelected)
    return index !== -1 ? index : 0
  }

  const [isExpanded, setIsExpanded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(getInitialIndex)
  const [selectedIndex, setSelectedIndex] = useState(getInitialIndex)

  const selectButtonRef = useRef<HTMLDivElement>(null)
  const selectRef = useRef<HTMLDivElement>(null)

  const isButtonOnTheLeftViewportSide = useDropdownPosition({
    triggerRef: selectButtonRef,
    isExpanded,
  })
  const isMobileDevice = useMatchMedia()

  const closeDropdown = useCallback(() => {
    setIsExpanded(false)
  }, [])

  useClickOutside({ triggerRef: selectRef, action: closeDropdown })

  const { onKeyDown } = useSelectKeyboard({
    options,
    selectButtonRef,
    isExpanded,
    setIsExpanded,
    setSelectedIndex,
    currentIndex,
    setCurrentIndex,
  })

  const IDs = {
    originalControl: id,
    label: `${id}-label`,
    dropdown: `${id}-dropdown`,
  }

  const selectedOption = options[selectedIndex]

  const getOptionId = (index: number) => {
    return `${id}-option-${index}`
  }

  const handleOriginalControlChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const newIndex = options.findIndex(
      ({ value }) => value === event.target.value,
    )
    if (newIndex !== -1) {
      setSelectedIndex(newIndex)
      setCurrentIndex(newIndex)
    }
  }

  const handleOptionClick = (index: number) => {
    setSelectedIndex(index)
    setCurrentIndex(index)
    setIsExpanded(false)
  }

  const toggleExpandedState = () => {
    setIsExpanded((prev) => {
      const next = !prev

      if (next) {
        setCurrentIndex(selectedIndex)
      }

      return next
    })
  }

  return (
    <div className="select" ref={selectRef} onKeyDown={onKeyDown}>
      <label
        htmlFor={IDs.originalControl}
        className={classNames('select__label', {
          'visually-hidden': isLabelHidden,
        })}
        id={IDs.label}
      >
        {label}
      </label>
      <select
        className={classNames('select__original-control', buttonClassName)}
        id={IDs.originalControl}
        aria-hidden={!isMobileDevice}
        tabIndex={isMobileDevice ? 0 : -1}
        value={selectedOption.value}
        onChange={handleOriginalControlChange}
      >
        {options.map(({ id, value }) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="select__body">
        <div
          className={classNames('select__button', buttonClassName, {
            [stateClasses.isExpanded]: isExpanded,
          })}
          role="combobox" // поле, которое управляет списком вариантов
          aria-expanded={isExpanded}
          aria-activedescendant={getOptionId(currentIndex)} // виртуальный фокус, указывает на ID дочернего элемента, который сейчас активный, позволяя браузеру держать фокус на кнопке, а скринридерам — озвучивать выделенный элемент
          aria-haspopup="listbox" // индексирует появления списка
          aria-controls={IDs.dropdown}
          aria-labelledby={IDs.label}
          aria-hidden={isMobileDevice}
          tabIndex={isMobileDevice ? -1 : 0}
          ref={selectButtonRef}
          onClick={toggleExpandedState}
        >
          {selectedOption.value}
        </div>
        <div
          className={classNames('select__dropdown', {
            [stateClasses.isExpanded]: isExpanded,
            [stateClasses.isOnTheLeftSide]: isButtonOnTheLeftViewportSide,
            [stateClasses.isOnTheRightSide]: !isButtonOnTheLeftViewportSide,
          })}
          id={IDs.dropdown}
          role="listbox"
          aria-labelledby={IDs.label}
        >
          {options.map(({ id, value }, index) => (
            <div
              key={id}
              className={classNames('select__option', {
                [stateClasses.isSelected]: selectedIndex === index,
                [stateClasses.isCurrent]: currentIndex === index,
              })}
              id={getOptionId(index)}
              role="option"
              aria-selected={selectedIndex === index}
              onClick={() => handleOptionClick(index)}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Select
