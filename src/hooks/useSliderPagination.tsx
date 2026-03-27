import { useRef } from 'react'
import type { PaginationRefs } from '@/types/slider'

const useSliderPagination = (): PaginationRefs => {
  const paginationRef = useRef<HTMLDivElement>(null)

  return {
    paginationRef,
  }
}

export default useSliderPagination
