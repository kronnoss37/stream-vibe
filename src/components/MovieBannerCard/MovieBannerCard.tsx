import classNames from 'classnames'
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
  titleId?: string
  TitleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  description: string
  imgSrc: string
  isSmallPaddingY?: boolean
}

const MovieBannerCard = ({
  title,
  titleId,
  TitleTag = 'h2',
  description,
  imgSrc,
  isSmallPaddingY = false,
}: MovieBannerCardProps) => {
  return (
    <div className="movie-banner-card">
      <LazyImage className="movie-banner-card__bg-image" src={imgSrc} />

      <div
        className={classNames('movie-banner-card__inner', {
          'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag className="movie-banner-card__title h3" id={titleId}>
            {title}
          </TitleTag>
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
