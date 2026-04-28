import { type MovieBannerCardProps } from '@/components/MovieBannerCard'
import movieCardImgSrc from '@/assets/images/movie-banner/1.jpg'

interface MovieBannerCardType extends MovieBannerCardProps {
  id: number
}

export const movieCards: MovieBannerCardType[] = [
  {
    id: 1,
    title: 'Avengers : Endgame',
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    imgSrc: movieCardImgSrc,
  },
  {
    id: 2,
    title: 'Avengers : Endgame 2',
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    imgSrc: movieCardImgSrc,
  },
  {
    id: 3,
    title: 'Avengers : Endgame 3',
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    imgSrc: movieCardImgSrc,
  },
  {
    id: 4,
    title: 'Avengers : Endgame 4',
    description:
      "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
    imgSrc: movieCardImgSrc,
  },
]
