import type { ReactNode } from 'react'
import useSliderNavigation from '@/hooks/useSliderNavigation'
import useSliderPagination from '@/hooks/useSliderPagination'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import PersonCard from '@/components/PersonCard'
import ReviewCard from '@/components/ReviewCard'
import { AnchorButton } from '@/components/Button'
import Icon from '@/components/Icon'
import Tags from '@/components/Tags'
import Ratings from '@/components/Ratings'
import { castItems } from '@/data/castItems'
import { reviewItems } from '@/data/reviewItems'

import './MovieDetails.scss'

interface MovieDetailsProps {
  seasons?: ReactNode
}

const MovieDetails = ({ seasons }: MovieDetailsProps) => {
  const castNavigation = useSliderNavigation()
  const reviewsNavigation = useSliderNavigation()
  const reviewsPagination = useSliderPagination()
  const titleId = 'movie-details-title'

  return (
    <section className="movie-details container" aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        {seasons && (
          <div className="movie-details__panel movie-details__panel--seasons">
            <div className="movie-details__group movie-details__group--big-gap-y">
              <h3 className="h4">Seasons and Episodes</h3>
              {seasons}
            </div>
          </div>
        )}
        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">
              <p>
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              navigation={castNavigation}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigation={castNavigation}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {castItems.map(({ id, ...castItem }) => (
              <PersonCard key={id} width={102} height={109} {...castItem} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel movie-details__panel--large-gap-y">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <AnchorButton
              href="/"
              label="Add Your Review"
              mode="black-08"
              iconName="plus"
            />
          </header>
          <Slider
            navigation={reviewsNavigation}
            pagination={reviewsPagination}
            navigationMode="rounded"
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                  allowTouchMove: true,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
            withInternalNavigation
            isNavigationHiddenMobile={false}
          >
            {reviewItems.map(({ id, ...reviewItem }) => (
              <ReviewCard key={id} {...reviewItem} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" dateTime="2022">
                  2022
                </time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada']}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: 'IMDb', value: 4.5 },
                  { title: 'Streamvibe', value: 4 },
                ]}
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="genres" />
                <span>Genres</span>
              </h3>
              <Tags items={['Action', 'Adventure']} />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              <PersonCard
                imgSrc="/src/assets/images/people/director.jpg"
                imgAlt="Rishab Shetty"
                width={57}
                height={60}
                name="Rishab Shetty"
                subtitle="From India"
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              <PersonCard
                imgSrc="/src/assets/images/people/music.jpg"
                imgAlt="B. Ajaneesh Loknath"
                width={57}
                height={60}
                name="B. Ajaneesh Loknath"
                subtitle="From India"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieDetails
