import { Link } from 'react-router'
import LazyImage from '@/components/LazyImage'
import Badge from '@/components/Badge'
import RatingView from '@/components/RatingView'

import './MovieCard.scss'

export interface MovieCardProps {
  link?: string
  title: string
  imgSrc: string
  duration?: string
  views?: string
  released?: {
    label: string
    dateTime: string
  }
  rating?: {
    value: number
    label: string
  }
  season?: string
}

const MovieCard = ({
  link = '/movie',
  title,
  imgSrc,
  duration,
  views,
  released,
  rating,
  season,
}: MovieCardProps) => {
  return (
    <Link to={link} className="movie-card" title={title}>
      <h3 className="visually-hidden">{title}</h3>
      <LazyImage
        className="movie-card__image"
        src={imgSrc}
        width={244}
        height={281}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge iconName="clock" iconAriaLabel="Duration">
            {duration}
          </Badge>
        )}

        {season && <Badge iconName="catalog">{season}</Badge>}

        {rating && (
          <Badge className="movie-card__rating-badge">
            <RatingView {...rating} />
          </Badge>
        )}

        {views && (
          <Badge iconName="eye" iconAriaLabel="Views">
            {views}
          </Badge>
        )}

        {released && (
          <Badge className="movie-card__released-badge">
            Released at{' '}
            <time
              className="movie-card__released-badge-label"
              dateTime={released.dateTime}
            >
              {released.label}
            </time>
          </Badge>
        )}
      </div>
    </Link>
  )
}

export default MovieCard
