import { useRef, type KeyboardEvent } from 'react'
import { type BaseTabItem } from '@/types/tabs'

interface TabsKeyboardNavigation {
  items: BaseTabItem[]
  activeId: string
  onChange: (id: string) => void
}

const useTabsKeyboardNavigation = ({
  items,
  activeId,
  onChange,
}: TabsKeyboardNavigation) => {
  const tabRefs = useRef<(HTMLElement | null)[]>([])

  const handleKeyDown = (event: KeyboardEvent) => {
    const { code, metaKey } = event

    const currentTabIndex = items.findIndex((item) => item.id === activeId)
    const lastTabIndex = items.length - 1
    let newIndex = currentTabIndex

    const action = {
      ArrowLeft: () =>
        currentTabIndex === 0 ? lastTabIndex : currentTabIndex - 1,
      ArrowRight: () =>
        currentTabIndex === lastTabIndex ? 0 : currentTabIndex + 1,
      Home: () => 0,
      End: () => lastTabIndex,
    }[code]

    if (action) {
      event.preventDefault()
      newIndex = action()
    }

    const isMacHomeKey = metaKey && code === 'ArrowLeft'
    if (isMacHomeKey) {
      event.preventDefault()
      newIndex = 0
    }

    const isMacEndKey = metaKey && code === 'ArrowRight'
    if (isMacEndKey) {
      event.preventDefault()
      newIndex = lastTabIndex
    }

    if (newIndex !== currentTabIndex) {
      onChange(items[newIndex].id)
      tabRefs.current[newIndex]?.focus()
    }
  }

  return {
    tabRefs,
    handleKeyDown,
  }
}

export default useTabsKeyboardNavigation
