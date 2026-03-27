import useSliderNavigation from '@/hooks/useSliderNavigation'
import useSliderPagination from '@/hooks/useSliderPagination'
import useSliderScrollbar from '@/hooks/useSliderScrollbar'
import Section from '@/layouts/Section'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import CategoryCard from '@/sections/CategoryCard'
import { categoryItems } from '@/data/categoryItems'

import './Categories.scss'

const Categories = () => {
  const navigation = useSliderNavigation()
  const pagination = useSliderPagination()
  const scrollbar = useSliderScrollbar()

  const data = {
    title: 'Explore our wide variety of categories',
    titleId: 'categories-title',
    description:
      "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new",
    actions: (
      <SliderNavigation
        className="categories__navigation"
        mode="tile"
        navigation={navigation}
        pagination={pagination}
      />
    ),
    isActionHiddenOnMobile: true,
  }

  return (
    <Section className="categories" {...data}>
      <div className="categories__body">
        <Slider
          navigation={navigation}
          pagination={pagination}
          scrollbar={scrollbar}
          isBeyondTheViewportOnMobileS
        >
          {categoryItems.map(({ id, title, images }) => (
            <CategoryCard key={id} title={title} images={images} />
          ))}
        </Slider>
      </div>
    </Section>
  )
}

export default Categories
