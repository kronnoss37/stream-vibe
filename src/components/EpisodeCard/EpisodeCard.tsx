import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Icon from '@/components/Icon'

import './EpisodeCard.scss'

export interface EpisodeCardProps {
  number: string
  title: string
  description: string
  duration: string
  video: {
    src: string
    poster: string
  }
}

const EpisodeCard = ({
  number,
  title,
  description,
  duration,
  video,
}: EpisodeCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!videoRef.current) return
      const isFullscreenEnabled =
        document.fullscreenElement === videoRef.current

      if (!isFullscreenEnabled) {
        videoRef.current.pause()
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const playButtonTitle = 'Play video'

  const handlePlayButtonClick = () => {
    if (!videoRef.current) return

    videoRef.current.play()
    videoRef.current.requestFullscreen()
    videoRef.current.controls = true
    setIsPlaying(true)
  }

  const handleVideoPause = () => {
    if (!videoRef.current) return

    videoRef.current.controls = false
    setIsPlaying(false)
  }

  return (
    <div className="episode-card">
      <div className="episode-card__number">{number}</div>
      <div className="episode-card__player">
        <video
          className="episode-card__video"
          src={video.src}
          poster={video.poster}
          width={172}
          height={118}
          ref={videoRef}
          onPause={handleVideoPause}
        />
        <button
          className={classNames('episode-card__play-button', {
            'is-active': !isPlaying,
          })}
          aria-label={playButtonTitle}
          title={playButtonTitle}
          onClick={handlePlayButtonClick}
        >
          <Icon className="episode-card__play-button-icon" name="play-circle" />
        </button>
      </div>
      <div className="episode-card__body">
        <div className="episode-card__info">
          <h4 className="episode-card__title h6">{title}</h4>
          <div className="episode-card__duration">
            <Icon name="clock-transparent" ariaLabel="Duration" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="episode-card__description hidden-mobile">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default EpisodeCard
