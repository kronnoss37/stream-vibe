import useSliderNavigation from '@/hooks/useSliderNavigation'
import useSliderPagination from '@/hooks/useSliderPagination'
import Slider from '@/components/Slider'
import MovieBannerCard from '@/components/MovieBannerCard'
import { movieCards } from '@/data/movieCards'

import './MoviesBanner.scss'

const MoviesBanner = () => {
  const navigation = useSliderNavigation()
  const pagination = useSliderPagination()

  const titleId = 'movies-banner-title'

  return (
    <section className="movies-banner container" aria-labelledby={titleId}>
      <div className="movies-banner__inner">
        <h1 className="visually-hidden" id={titleId}>
          Movies & Shows
        </h1>
        <Slider
          navigation={navigation}
          pagination={pagination}
          sliderParams={{
            slidesPerView: 1,
            breakpoints: {
              1024: {
                allowTouchMove: false,
              },
            },
          }}
          withInternalNavigation
          navigationPosition="abs-bottom"
        >
          {movieCards.map(({ id, ...movieCard }) => (
            <MovieBannerCard key={id} {...movieCard} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default MoviesBanner
