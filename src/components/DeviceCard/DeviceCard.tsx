import LazyImage from '@/components/LazyImage'
import './DeviceCard.scss'

export interface DeviceCardProps {
  title: string
  imgSrc: string
  description: string
}

const DeviceCard = ({ title, imgSrc, description }: DeviceCardProps) => {
  return (
    <div className="device-card">
      <header className="device-card__header">
        <div className="device-card__image-wrapper">
          <LazyImage
            className="device-card__image"
            src={imgSrc}
            width={40}
            height={40}
          />
        </div>
        <h3 className="device-card__title h4">{title}</h3>
      </header>
      <div className="device-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DeviceCard
