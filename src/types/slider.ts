import type { RefObject } from 'react'
import type { Swiper } from 'swiper'
import type { SwiperOptions } from 'swiper/types'

interface NavigationRefs {
  prevBtnRef: RefObject<HTMLButtonElement | null>
  nextBtnRef: RefObject<HTMLButtonElement | null>
}

interface ScrollbarRefs {
  scrollbarRef: RefObject<HTMLDivElement | null>
}

interface PaginationRefs {
  paginationRef: RefObject<HTMLDivElement | null>
}

type SwiperRef = RefObject<Swiper | null>

type SliderParamsType = {
  slidesPerView: number
  slidesPerGroup?: number
  spaceBetween?: number
  breakpoints?: SwiperOptions['breakpoints']
}

export type {
  NavigationRefs,
  ScrollbarRefs,
  PaginationRefs,
  SwiperRef,
  SliderParamsType,
}
