import classNames from 'classnames'
import BurgerButtonIcon from '@/icons/BurgerButtonIcon'
import './BurgerButton.scss'

interface BurgerButtonProps {
  className?: string
  isActive: boolean
  onClick: () => void
}

const BurgerButton = ({ className, isActive, onClick }: BurgerButtonProps) => {
  const title = 'Open menu'

  return (
    <button
      className={classNames(className, 'burger-button', {
        'is-active': isActive,
      })}
      type="button"
      aria-label={title}
      title={title}
      onClick={onClick}
    >
      <BurgerButtonIcon />
    </button>
  )
}

export default BurgerButton
