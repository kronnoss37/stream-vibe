import Icon from '@/components/Icon'
import { type ButtonContent as ButtonContentProps } from '@/types/button'

const ButtonContent = ({
  label,
  isLabelHidden,
  iconName,
  iconPosition = 'before',
}: ButtonContentProps) => {
  const IconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )

  return (
    <>
      {iconPosition === 'before' && IconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && IconComponent}
    </>
  )
}

export default ButtonContent
