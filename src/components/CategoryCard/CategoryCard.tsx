import { Link } from 'react-router'
import Icon from '@/components/Icon'
import LazyImage from '@/components/LazyImage'

import './CategoryCard.scss'

export interface CategoryCardProps {
  title: string
  images: string[]
}

const CategoryCard = ({ title, images }: CategoryCardProps) => {
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
        <h3 className="category-card__title">{title}</h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </Link>
  )
}

export default CategoryCard
