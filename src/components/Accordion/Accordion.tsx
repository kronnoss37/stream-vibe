import type { ReactNode } from 'react'
import classNames from 'classnames'
import Icon from '@/components/Icon'

import './Accordion.scss'

interface AccordionProps {
  title: string
  titleLevelClassName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  subtitle: string
  id: string
  name: string
  isOpen: boolean
  isArrowButton?: boolean
  children: ReactNode
}

const Accordion = ({
  title,
  titleLevelClassName = 'h5',
  subtitle,
  id,
  name,
  isOpen,
  isArrowButton = false,
  children,
}: AccordionProps) => {
  return (
    <div className="accordion">
      <details className="accordion__details" name={name} open={isOpen}>
        <summary className="accordion__summary">
          <h3 className={classNames('accordion__title', titleLevelClassName)}>
            <span role="term" aria-details={id}>
              {title}
            </span>
            {subtitle && (
              <span className="accordion__subtitle">{subtitle}</span>
            )}
            {isArrowButton && (
              <div className="accordion__arrow">
                <Icon name="arrow-down" />
              </div>
            )}
          </h3>
        </summary>
      </details>
      <div className="accordion__content" role="definition" id={id}>
        <div className="accordion__content-inner">
          <div className="accordion__content-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
