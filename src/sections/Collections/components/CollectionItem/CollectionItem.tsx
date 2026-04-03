import classNames from 'classnames'
import useSliderNavigation from '@/hooks/useSliderNavigation'
import useSliderPagination from '@/hooks/useSliderPagination'
import useSliderScrollbar from '@/hooks/useSliderScrollbar'
import Section from '@/layouts/Section'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import CategoryCard, { type CategoryCardType } from '@/components/CategoryCard'
import MovieCard, { type MovieCardProps } from '@/components/MovieCard'
import getIdFromTitle from '@/utils/getIdFromTitle'
import { type SliderParamsType } from '@/types/slider'

import './CollectionItem.scss'

type categoryItem = CategoryCardType & {
  id: number
}

type movieItem = MovieCardProps & {
  id: number
}

export interface CollectionItemType {
  title: string
  categoryItems?: categoryItem[]
  movieItems?: movieItem[]
  sliderParams?: SliderParamsType
}

interface CollectionItemProps extends CollectionItemType {
  className?: string
  collectionTitle: string
}

const CollectionItem = ({
  className,
  collectionTitle,
  title,
  movieItems,
  categoryItems,
  sliderParams,
}: CollectionItemProps) => {
  const navigation = useSliderNavigation()
  const pagination = useSliderPagination()
  const scrollbar = useSliderScrollbar()

  const titleFormatted = `${getIdFromTitle(collectionTitle)}-${getIdFromTitle(title)}`
  const titleId = `${titleFormatted}-title`

  return (
    <Section
      className={classNames(className, 'collection-item')}
      title={title}
      titleId={titleId}
      actions={
        <SliderNavigation
          mode="tile"
          navigation={navigation}
          pagination={pagination}
        />
      }
      isActionHiddenOnMobile
    >
      <Slider
        navigation={navigation}
        pagination={pagination}
        scrollbar={scrollbar}
        sliderParams={sliderParams}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems?.map(({ id, ...categoryItem }) => (
          <CategoryCard key={id} {...categoryItem} />
        )) ??
          movieItems?.map(({ id, ...movieItem }) => (
            <MovieCard key={id} {...movieItem} />
          )) ??
          []}
      </Slider>
    </Section>
  )
}

export default CollectionItem
