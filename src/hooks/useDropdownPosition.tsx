import { useState, useEffect, type RefObject, useCallback } from 'react'

interface DropdownPositionProps {
  triggerRef: RefObject<HTMLDivElement | null>
  isExpanded: boolean
}

const useDropdownPosition = ({
  triggerRef,
  isExpanded,
}: DropdownPositionProps) => {
  const [isLeftSide, setIsLeftSide] = useState(false)

  const updateDropdownPosition = useCallback(() => {
    if (!triggerRef.current) return

    const viewportWidth = document.documentElement.clientWidth
    const viewportCenterX = viewportWidth / 2
    const { width, x } = triggerRef.current.getBoundingClientRect()
    const selectButtonCenterX = x + width / 2

    setIsLeftSide(selectButtonCenterX < viewportCenterX)
  }, [triggerRef])

  useEffect(() => {
    if (isExpanded) {
      updateDropdownPosition()
    }
  }, [isExpanded, updateDropdownPosition])

  useEffect(() => {
    if (!isExpanded) return

    window.addEventListener('resize', updateDropdownPosition)

    return () => {
      window.removeEventListener('resize', updateDropdownPosition)
    }
  }, [isExpanded, updateDropdownPosition])

  return isLeftSide
}

export default useDropdownPosition
