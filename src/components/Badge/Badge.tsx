import type { ReactNode } from 'react'
import { type IconName } from '@/components/Icon'
import classNames from 'classnames'

import './Badge.scss'
import Icon from '@/components/Icon'

interface BadgeProps {
  className?: string
  mode?: 'accent'
  isBig?: boolean
  iconName?: IconName
  iconAriaLabel?: string
  children: ReactNode
}

const Badge = ({
  className,
  mode,
  isBig = false,
  iconName,
  iconAriaLabel,
  children,
}: BadgeProps) => {
  return (
    <div
      className={classNames(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig,
      })}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          ariaLabel={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}

export default Badge
