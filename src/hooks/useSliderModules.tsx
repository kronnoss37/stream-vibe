import { useEffect } from 'react'
import type {
  NavigationRefs,
  PaginationRefs,
  ScrollbarRefs,
  SwiperRef,
} from '@/types/slider'
import type {
  NavigationOptions,
  PaginationOptions,
  ScrollbarOptions,
} from 'swiper/types'

interface SliderModulesProps {
  swiperRef: SwiperRef
  navigation?: NavigationRefs
  pagination?: PaginationRefs
  scrollbar?: ScrollbarRefs
}

const useSliderModules = ({
  swiperRef,
  navigation,
  pagination,
  scrollbar,
}: SliderModulesProps) => {
  useEffect(() => {
    console.log('swiper effect')

    const swiper = swiperRef.current
    if (!swiper) return

    if (navigation?.prevBtnRef.current && navigation?.nextBtnRef.current) {
      const navigationParams = swiper.params.navigation as NavigationOptions
      navigationParams.prevEl = navigation.prevBtnRef.current
      navigationParams.nextEl = navigation.nextBtnRef.current

      swiper.navigation.init()
      swiper.navigation.update()
    }

    if (pagination?.paginationRef.current) {
      const paginationParams = swiper.params.pagination as PaginationOptions
      paginationParams.el = pagination.paginationRef.current
      paginationParams.bulletClass = 'slider-navigation__pagination-bullet'
      paginationParams.bulletActiveClass = 'is-active'

      swiper.pagination.init()
      swiper.pagination.render()
      swiper.pagination.update()
    }

    if (scrollbar?.scrollbarRef.current) {
      const scrollbarParams = swiper.params.scrollbar as ScrollbarOptions
      scrollbarParams.el = scrollbar.scrollbarRef.current
      scrollbarParams.dragClass = 'slider__scrollbar-drag'

      swiper.scrollbar.init()
    }

    swiper.update()
  }, [swiperRef, navigation, pagination, scrollbar])
}

export default useSliderModules
