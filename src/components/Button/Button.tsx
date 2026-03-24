import classNames from 'classnames'
import { type ButtonBase } from '@/types/button'
import ButtonContent from './ButtonContent'
import './Button.scss'
import { forwardRef, type ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonBase &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBase>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = 'button',
      mode,
      label,
      isLabelHidden,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const title = isLabelHidden ? label : undefined

    return (
      <button
        ref={ref}
        type={type}
        className={classNames(className, 'button', {
          [`button--${mode}`]: mode,
        })}
        title={title}
        aria-label={title}
        {...props}
      >
        <ButtonContent
          label={label}
          isLabelHidden={isLabelHidden}
          iconName={props.iconName}
          iconPosition={props.iconPosition}
        />
      </button>
    )
  },
)

Button.displayName = 'Button'
export default Button
