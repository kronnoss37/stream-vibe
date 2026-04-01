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
}

const Tabs = ({
  className,
  title,
  activeId,
  onChange,
  items,
  withInternalNavigation = false,
}: TabsProps) => {
  const activeTab = items.find((item) => item.id === activeId)

  if (!activeTab) return null

  const { buttonId, contentId } = getTabsElementsIdsFromTitle(
    `${title} ${activeTab.title}`,
  )

  return (
    <div className={classNames(className, 'tabs')}>
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
        <div
          className="tabs__content"
          id={contentId}
          aria-labelledby={buttonId}
          tabIndex={0}
        >
          {activeTab.children}
        </div>
      </div>
    </div>
  )
}

export default Tabs
