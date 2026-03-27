import { useRef } from 'react'
import type { NavigationRefs } from '@/types/slider'

const useSliderNavigation = (): NavigationRefs => {
  const prevBtnRef = useRef<HTMLButtonElement>(null)
  const nextBtnRef = useRef<HTMLButtonElement>(null)

  return {
    prevBtnRef,
    nextBtnRef,
  }
}

export default useSliderNavigation
