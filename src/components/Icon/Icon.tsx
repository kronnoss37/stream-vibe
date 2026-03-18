import classNames from 'classnames'
import { icons } from '@/icons'

import './Icon.scss'

export type IconName = keyof typeof icons

interface IconProps {
  className?: string
  name: IconName
}

const Icon = ({ className, name }: IconProps) => {
  const IconComponent = icons[name]

  return (
    <span className={classNames(className, 'icon')}>
      <IconComponent />
    </span>
  )
}

export default Icon
