import { Link } from 'react-router'
import Icon from '@/components/Icon'
import LazyImage from '@/components/LazyImage'
import Badge from '@/components/Badge'

import './CategoryCard.scss'

export interface CategoryCardProps {
  title: string
  images: string[]
  badge?: string
}

const CategoryCard = ({ title, images, badge }: CategoryCardProps) => {
  return (
    <Link to="/movies" className="category-card">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <LazyImage
            key={index}
            className="category-card__image"
            src={imgSrc}
            width={115}
            height={123}
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge className="category-card__badge" mode="accent" isBig>
              {badge}
            </Badge>
          )}
          <span>{title}</span>
        </h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </Link>
  )
}

export default CategoryCard
