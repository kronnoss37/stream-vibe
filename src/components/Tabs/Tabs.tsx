import classNames from 'classnames'
import TabsNavigation from './components/TabsNavigation'
import getTabsElementsIdsFromTitle from '@/components/Tabs/utils/getTabsElementsIdsFromTitle'
import { type TabItemWithContent } from '@/types/tabs'

import './Tabs.scss'

interface TabsProps {
  className?: string
  title: string
  activeId: string
  onChange: (id: string) => void
  items: TabItemWithContent[]
  withInternalNavigation?: boolean
  isEnableOnMobile?: boolean
}

const Tabs = ({
  className,
  title,
  activeId,
  onChange,
  items,
  withInternalNavigation = false,
  isEnableOnMobile = false,
}: TabsProps) => {
  const itemsToRender = isEnableOnMobile
    ? items
    : items.filter((item) => item.id === activeId)

  if (itemsToRender.length === 0) return null

  return (
    <div
      className={classNames(className, 'tabs', {
        'tabs--enable-on-mobile': isEnableOnMobile,
      })}
    >
      {withInternalNavigation && (
        <TabsNavigation
          className="tabs__navigation"
          title={title}
          activeId={activeId}
          onChange={onChange}
          items={items}
        />
      )}

      <div className="tabs__body">
        {itemsToRender.map((item) => {
          const { buttonId, contentId } = getTabsElementsIdsFromTitle(
            `${title} ${item.title}`,
          )

          const isActive = item.id === activeId

          return (
            <div
              key={item.id}
              className={classNames('tabs__content', {
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
            >
              {item.children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs
