import type { ReactNode } from 'react'
import classNames from 'classnames'
import './Content.scss'

interface ContentProps {
  children: ReactNode
  isResetPaddingTop?: boolean
}

const Content = ({ children, isResetPaddingTop }: ContentProps) => {
  return (
    <main
      className={classNames('content', {
        'content--reset-padding-top': isResetPaddingTop,
      })}
    >
      {children}
    </main>
  )
}

export default Content
