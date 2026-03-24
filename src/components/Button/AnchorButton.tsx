import classNames from 'classnames'
import { type ButtonBase } from '@/types/button'
import ButtonContent from './ButtonContent'

import './Button.scss'

interface AnchorButtonProps extends ButtonBase {
  href: string
  target?: '_blank'
}

const AnchorButton = ({
  href,
  target,
  className,
  mode,
  label,
  isLabelHidden,
  ...props
}: AnchorButtonProps) => {
  const title = isLabelHidden ? label : undefined

  return (
    <a
      href={href}
      target={target}
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...props}
    >
      <ButtonContent label={label} isLabelHidden={isLabelHidden} {...props} />
    </a>
  )
}

export default AnchorButton
