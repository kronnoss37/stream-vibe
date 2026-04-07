import { useRef, type ReactNode } from 'react'
import classNames from 'classnames'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import SliderNavigation, { type Mode } from './components/SliderNavigation'
import useSliderModules from '@/hooks/useSliderModules'
import type {
  NavigationRefs,
  PaginationRefs,
  ScrollbarRefs,
  SliderParamsType,
} from '@/types/slider'

import 'swiper/css'
import './Slider.scss'

const defaultSliderParams = {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1441: {
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
}

const swiperModules = [Navigation, Pagination, Scrollbar]

interface SliderProps {
  children: ReactNode[]
  navigation?: NavigationRefs
  pagination?: PaginationRefs
  scrollbar?: ScrollbarRefs
  navigationMode?: Mode
  sliderParams?: SliderParamsType
  withInternalNavigation?: boolean
  isBeyondTheViewportOnMobileS?: boolean
  navigationPosition?: 'abs-bottom'
  isNavigationHiddenMobile?: boolean
}

const Slider = ({
  children,
  navigation,
  pagination,
  scrollbar,
  navigationMode,
  sliderParams = defaultSliderParams,
  withInternalNavigation = false,
  isBeyondTheViewportOnMobileS = false,
  navigationPosition,
  isNavigationHiddenMobile = true,
}: SliderProps) => {
  const swiperRef = useRef<SwiperType>(null)

  useSliderModules({ swiperRef, navigation, pagination, scrollbar })

  const scrollbarRef = scrollbar?.scrollbarRef

  return (
    <div
      className={classNames('slider', {
        'slider--beyond-the-viewport-mobile-s': isBeyondTheViewportOnMobileS,
      })}
    >
      <Swiper
        className="slider__swiper"
        modules={swiperModules}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        {...sliderParams}
      >
        {children.map((slide, index) => (
          <SwiperSlide key={index} className="slider__swiper-slide">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {withInternalNavigation && (
        <SliderNavigation
          className="slider__navigation"
          navigation={navigation}
          pagination={pagination}
          mode={navigationMode}
          position={navigationPosition}
          isHiddenMobile={isNavigationHiddenMobile}
        />
      )}

      {scrollbarRef && (
        <div className="slider__scrollbar visible-mobile" ref={scrollbarRef} />
      )}
    </div>
  )
}

export default Slider
