import { useEffect, useRef, type JSX } from 'react'
import classNames from 'classnames'
import IMask from 'imask'
import getIdFromTitle from '@/utils/getIdFromTitle'
import './Field.scss'

interface FieldProps {
  className?: string
  id?: string
  label: string
  placeholder: string
  type?: 'email' | 'textarea'
  inputMode?: 'tel'
  mask?: string
  isRequired?: boolean
  renderBefore?: (buttonClassName: string) => JSX.Element
}

const Field = ({
  className,
  label,
  id = getIdFromTitle(label),
  placeholder,
  type,
  inputMode,
  mask,
  isRequired,
  renderBefore,
}: FieldProps) => {
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!mask || !fieldRef.current) return

    IMask(fieldRef.current, { mask })
  }, [mask])

  const fieldControlClassName = 'field__control'

  return (
    <div className={classNames(className, 'field')}>
      <label htmlFor={id} className="field__label">
        {label}{' '}
        {isRequired && (
          <span className="field__required-star" aria-hidden={true}>
            *
          </span>
        )}
      </label>
      <div className="field__body">
        {renderBefore?.(fieldControlClassName)}
        {type === 'textarea' ? (
          <textarea
            className={fieldControlClassName}
            id={id}
            placeholder={placeholder}
            required={isRequired}
            ref={fieldRef as React.RefObject<HTMLTextAreaElement>}
          />
        ) : (
          <input
            className={fieldControlClassName}
            id={id}
            type={type}
            placeholder={placeholder}
            required={isRequired}
            inputMode={inputMode}
            ref={fieldRef as React.RefObject<HTMLInputElement>}
          />
        )}
      </div>
    </div>
  )
}

export default Field
