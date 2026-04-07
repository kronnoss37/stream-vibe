import LazyImage from '@/components/LazyImage'
import './PersonCard.scss'

export interface PersonCardProps {
  imgSrc: string
  imgAlt: string
  width?: number
  height?: number
  name?: string
  subtitle?: string
}

const PersonCard = ({
  imgSrc,
  imgAlt,
  width,
  height,
  name,
  subtitle,
}: PersonCardProps) => {
  const hasBody = Boolean(name || subtitle)

  return (
    <div className="person-card">
      <LazyImage
        className="person-card__image"
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
        width={width}
        height={height}
      />
      {hasBody && (
        <div className="person-card__body">
          {name && <h4 className="person-card__name">{name}</h4>}
          {subtitle && <p className="person-card__subtitle">{subtitle}</p>}
        </div>
      )}
    </div>
  )
}

export default PersonCard
