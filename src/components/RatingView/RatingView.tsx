import { type CSSProperties } from 'react'

import './RatingView.scss'

interface RatingViewProps {
  value: number
  label: string
}

const RatingView = ({ value = 5, label }: RatingViewProps) => {
  const ariaLabel = `Rating: ${value} stars`
  const style: CSSProperties & {
    '--ratingViewValue': number
  } = {
    '--ratingViewValue': value,
  }

  return (
    <div
      className="rating-view"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={style}
    >
      <div className="rating-view__stars">
        <img
          src="/rating/stars_unfilled.svg"
          alt=""
          className="rating-view__stars-unfilled"
          width={98}
          height={18}
        />
        <img
          src="/rating/stars_filled.svg"
          alt=""
          className="rating-view__stars-filled"
          width={98}
          height={18}
        />
      </div>
      {label && <div className="rating-view__label">{label}</div>}
    </div>
  )
}

export default RatingView
