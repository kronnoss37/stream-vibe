import classNames from 'classnames'
import { icons } from '@/icons'

import './Icon.scss'

export type IconName = keyof typeof icons

interface IconProps {
  className?: string
  name: IconName
  ariaLabel?: string
}

const Icon = ({ className, name, ariaLabel }: IconProps) => {
  const IconComponent = icons[name]

  return (
    <span className={classNames(className, 'icon')} aria-label={ariaLabel}>
      <IconComponent />
    </span>
  )
}

export default Icon
