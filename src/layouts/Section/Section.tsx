import type { ReactNode } from 'react'
import classNames from 'classnames'

import './Section.scss'

interface SectionProps {
  className?: string
  title: string
  titleId: string
  description?: string
  actions?: ReactNode
  isActionHiddenOnMobile?: boolean
  children: ReactNode
}

const Section = ({
  className,
  title,
  titleId,
  description,
  actions,
  isActionHiddenOnMobile = false,
  children,
}: SectionProps) => {
  return (
    <section
      className={classNames(className, 'section')}
      aria-labelledby={titleId}
    >
      <div className="section__inner container">
        <header className="section__header">
          <div className="section__info">
            <h2 className="section__title h3" id={titleId}>
              {title}
            </h2>
            {description && (
              <div className="section__description">
                <p>{description}</p>
              </div>
            )}
          </div>
          {actions && (
            <div
              className={classNames('section__actions', {
                'hidden-mobile': isActionHiddenOnMobile,
              })}
            >
              {actions}
            </div>
          )}
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}

export default Section
