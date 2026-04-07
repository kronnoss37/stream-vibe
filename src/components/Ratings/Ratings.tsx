import RatingView from '@/components/RatingView'
import './Ratings.scss'

type Rating = {
  title: string
  value: number
}

interface RatingsProps {
  items: Rating[]
}

const Ratings = ({ items }: RatingsProps) => {
  return (
    <div className="ratings">
      <ul className="ratings__list">
        {items.map(({ title, value }, index) => (
          <li key={index} className="ratings__item">
            <h4 className="ratings__title">{title}</h4>
            <RatingView value={value} label={`${value}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings
