import { useRef, useEffect, type RefObject } from 'react'
import pxToRem from '@/utils/pxToRem'
import { type BaseTabItem } from '@/types/tabs'

interface TabsNavigationIndicator {
  items: BaseTabItem[]
  activeId: string
  tabRefs: RefObject<(HTMLElement | null)[]>
}

const navigationCssVars = {
  activeButtonWidth: '--tabsNavigationActiveButtonWidth',
  activeButtonOffsetLeft: '--tabsNavigationActiveButtonOffsetLeft',
}

const useTabsNavigationIndicator = ({
  items,
  activeId,
  tabRefs,
}: TabsNavigationIndicator) => {
  const tabsNavigationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const navigationElement = tabsNavigationRef.current
    if (!navigationElement) return

    const updateNavigationCssVars = () => {
      const currentId = items.findIndex((item) => item.id === activeId)
      const activeButton = tabRefs.current[currentId]

      if (!activeButton) return

      const { width, left } = activeButton.getBoundingClientRect()
      const offsetLeft = left - navigationElement.getBoundingClientRect().left

      navigationElement.style.setProperty(
        navigationCssVars.activeButtonWidth,
        `${pxToRem(width)}rem`,
      )
      navigationElement.style.setProperty(
        navigationCssVars.activeButtonOffsetLeft,
        `${pxToRem(offsetLeft)}rem`,
      )
    }

    updateNavigationCssVars()

    const resizeObserver = new ResizeObserver(updateNavigationCssVars)
    resizeObserver.observe(navigationElement)

    return () => {
      resizeObserver.disconnect()
    }
  }, [items, activeId, tabRefs])

  return {
    tabsNavigationRef,
  }
}

export default useTabsNavigationIndicator
