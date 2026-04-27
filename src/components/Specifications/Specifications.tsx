import classNames from 'classnames'
import './Specifications.scss'

type SpecificationItem = {
  title: string
  description: string
  isWide?: boolean
}

interface SpecificationsProps {
  items: SpecificationItem[]
}

const Specifications = ({ items }: SpecificationsProps) => {
  return (
    <div className="specifications">
      <dl className="specifications__list">
        {items.map(({ title, description, isWide }, index) => (
          <div
            key={index}
            className={classNames('specifications__item', {
              'specifications__item--wide': isWide,
            })}
          >
            <dt className="specifications__title">{title}</dt>
            <dd className="specifications__description">{description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Specifications
