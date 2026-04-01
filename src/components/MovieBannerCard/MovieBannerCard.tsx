import { Button } from '@/components/Button'
import LazyImage from '@/components/LazyImage'
import { type ButtonContent } from '@/types/button'

import './MovieBannerCard.scss'

const actions: ButtonContent[] = [
  {
    label: 'Add to playlist',
    iconName: 'plus',
  },
  {
    label: 'Like',
    iconName: 'like',
  },
  {
    label: 'Mute',
    iconName: 'volume',
  },
]

export interface MovieBannerCardProps {
  title: string
  description: string
  imgSrc: string
}

const MovieBannerCard = ({
  title,
  description,
  imgSrc,
}: MovieBannerCardProps) => {
  return (
    <div className="movie-banner-card">
      <LazyImage className="movie-banner-card__bg-image" src={imgSrc} />

      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3">{title}</h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            label="Play Now"
            iconName="play"
          />
          <div className="movie-banner-card__actions">
            {actions.map((action, index) => (
              <Button
                key={index}
                className="movie-banner-card__button"
                mode="black-06"
                isLabelHidden
                {...action}
              />
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard
