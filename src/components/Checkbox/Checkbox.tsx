import classNames from 'classnames'
import getIdFromTitle from '@/utils/getIdFromTitle'
import './Checkbox.scss'

interface CheckboxProps {
  className?: string
  id?: string
  label: string
  isRequired?: boolean
}

const Checkbox = ({
  className,
  label,
  id = getIdFromTitle(label),
  isRequired,
}: CheckboxProps) => {
  return (
    <label htmlFor={id} className={classNames(className, 'checkbox')}>
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}

export default Checkbox
