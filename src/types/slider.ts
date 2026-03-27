import type { RefObject } from 'react'
import type { Swiper } from 'swiper'

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

export type { NavigationRefs, ScrollbarRefs, PaginationRefs, SwiperRef }
