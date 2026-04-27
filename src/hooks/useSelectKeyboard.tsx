import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  type KeyboardEvent,
} from 'react'
import { type Option } from '@/components/Select'

// type Dispatch<A> = (value: A) => void
// type SetStateAction<S> = S | ((prevState: S) => S)
type SetState<T> = Dispatch<SetStateAction<T>>

interface SelectKeyboard {
  options: Option[]
  selectButtonRef: RefObject<HTMLDivElement | null>
  isExpanded: boolean
  setIsExpanded: SetState<boolean>
  setSelectedIndex: SetState<number>
  currentIndex: number
  setCurrentIndex: SetState<number>
}

const useSelectKeyboard = ({
  options,
  isExpanded,
  setIsExpanded,
  setSelectedIndex,
  currentIndex,
  setCurrentIndex,
  selectButtonRef,
}: SelectKeyboard) => {
  const lastIndex = options.length - 1

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const { code } = event

    const isButtonFocused = document.activeElement === selectButtonRef.current

    const isNeedToExpand = !isExpanded && isButtonFocused

    const onArrowUpKeyDown = () => {
      if (isNeedToExpand) {
        setIsExpanded(true)
        return
      }

      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : lastIndex))
    }

    const onArrowDownKeyDown = () => {
      if (isNeedToExpand) {
        setIsExpanded(true)
        return
      }

      setCurrentIndex((prev) => (prev < lastIndex ? prev + 1 : 0))
    }

    const onEnterOrSpaceKeyDown = () => {
      if (isNeedToExpand) {
        setIsExpanded(true)
        return
      }

      setSelectedIndex(currentIndex)
      setIsExpanded(false)
    }

    const onEscapeKeyDown = () => {
      setIsExpanded(false)
    }

    const action = {
      ArrowUp: onArrowUpKeyDown,
      ArrowDown: onArrowDownKeyDown,
      Space: onEnterOrSpaceKeyDown,
      Enter: onEnterOrSpaceKeyDown,
      Escape: onEscapeKeyDown,
    }[code]

    if (action) {
      event.preventDefault()
      action()
    }
  }

  return {
    onKeyDown,
  }
}

export default useSelectKeyboard
