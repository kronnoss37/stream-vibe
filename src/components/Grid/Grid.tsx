import type { ReactNode } from 'react'
import classNames from 'classnames'
import './Grid.scss'

interface GridProps {
  columns?: number
  children: ReactNode[]
}

const Grid = ({ columns = 1, children }: GridProps) => {
  return (
    <ul
      className={classNames('grid', {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li key={index} className="grid__item">
          {child}
        </li>
      ))}
    </ul>
  )
}

export default Grid
