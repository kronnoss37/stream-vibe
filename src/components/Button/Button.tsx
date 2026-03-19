import type { ComponentPropsWithoutRef, ElementType } from 'react'
import classNames from 'classnames'
import Icon, { type IconName } from '@/components/Icon'
import './Button.scss'

interface ButtonBaseProps {
  className?: string
  mode?: 'transparent' | 'black-10'
  label: string
  isLabelHidden?: boolean
  iconName?: IconName
  iconPosition?: 'before' | 'after'
}

type SpecificProps<T extends ElementType> = {
  as?: T
} & ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonBaseProps | 'as'>

const Button = <T extends ElementType = 'button'>({
  as,
  className,
  mode,
  label,
  isLabelHidden,
  iconName,
  iconPosition = 'before',
  ...props
}: SpecificProps<T>) => {
  const Component = as ?? 'button'

  const title = isLabelHidden ? label : undefined

  const IconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...props}
    >
      {iconPosition === 'before' && IconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && IconComponent}
    </Component>
  )
}

export default Button
