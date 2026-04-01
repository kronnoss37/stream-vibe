import classNames from 'classnames'
import getIdFromTitle from '@/utils/getIdFromTitle'
import './TabsNavigation.scss'
import getTabsElementsIdsFromTitle from '@/components/Tabs/utils/getTabsElementsIdsFromTitle'
import useTabsKeyboardNavigation from '@/hooks/useTabsKeyboardNavigation'
import useTabsNavigationIndicator from '@/hooks/useTabsNavigationIndicator'
import { type BaseTabItem } from '@/types/tabs'

interface TabsNavigationProps {
  className?: string
  title: string
  activeId: string
  onChange: (id: string) => void
  items: BaseTabItem[]
}

const TabsNavigation = ({
  className,
  title,
  activeId,
  onChange,
  items,
}: TabsNavigationProps) => {
  const { tabRefs, handleKeyDown } = useTabsKeyboardNavigation({
    items,
    activeId,
    onChange,
  })
  const { tabsNavigationRef } = useTabsNavigationIndicator({
    items,
    activeId,
    tabRefs,
  })
  const titleFormatted = getIdFromTitle(title)
  const titleId = `${titleFormatted}-title`

  return (
    <div
      className={classNames(className, 'tabs-navigation')}
      ref={tabsNavigationRef}
      role="tablist"
      aria-labelledby={titleId}
    >
      <h3 className="visually-hidden" id={titleId}>
        {title}
      </h3>
      {items.map((item, index) => {
        const { buttonId, contentId } = getTabsElementsIdsFromTitle(
          `${title} ${item.title}`,
        )

        const isActive = item.id === activeId

        return (
          <div
            key={item.id}
            className={classNames('tabs-navigation__button', {
              'is-active': isActive,
            })}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={handleKeyDown}
          >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}

export default TabsNavigation
