import { useRef } from 'react'
import type { ScrollbarRefs } from '@/types/slider'

const useSliderScrollbar = (): ScrollbarRefs => {
  const scrollbarRef = useRef<HTMLDivElement>(null)

  return {
    scrollbarRef,
  }
}

export default useSliderScrollbar
