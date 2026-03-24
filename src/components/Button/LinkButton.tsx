import { Link } from 'react-router'
import classNames from 'classnames'
import { type ButtonBase } from '@/types/button'
import ButtonContent from './ButtonContent'

import './Button.scss'

interface LinkButtonProps extends ButtonBase {
  to: string
}

const LinkButton = ({
  to,
  className,
  mode,
  label,
  isLabelHidden,
  ...props
}: LinkButtonProps) => {
  const title = isLabelHidden ? label : undefined

  return (
    <Link
      to={to}
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...props}
    >
      <ButtonContent label={label} isLabelHidden={isLabelHidden} {...props} />
    </Link>
  )
}

export default LinkButton
