import { type ReactNode } from 'react'
import classNames from 'classnames'
import './AccordionGroup.scss'

interface AccordionGroupProps {
  columns?: number
  isOrderedList?: boolean
  children: ReactNode[]
}

const AccordionGroup = ({
  columns = 1,
  isOrderedList = true,
  children,
}: AccordionGroupProps) => {
  const itemsPerColumn = Math.ceil(children.length / columns)
  const ListTag = isOrderedList ? 'ol' : 'ul'

  return (
    <ListTag
      className={classNames('accordion-group', {
        [`accordion-group--${columns}-columns`]: columns > 1,
        'accordion-group--has-counter': isOrderedList,
      })}
    >
      {children.map((child, index) => (
        <li
          key={index}
          className={classNames('accordion-group__item', {
            'accordion-group__item--last-column-item':
              columns > 1 && itemsPerColumn / (index + 1) === 1,
          })}
        >
          {child}
        </li>
      ))}
    </ListTag>
  )
}

export default AccordionGroup
