import { useState } from 'react'
import Tabs from '@/components/Tabs'
import CollectionItem from './components/CollectionItem'
import { collectionGroups } from '@/data/collectionGroups'

import './Collections.scss'

const Collections = () => {
  const [activeTabId, setActiveTabId] = useState(collectionGroups[0].id)

  return (
    <Tabs
      className="collections container"
      title="collections"
      withInternalNavigation
      isEnableOnMobile
      activeId={activeTabId}
      onChange={setActiveTabId}
      items={collectionGroups.map(({ id, title, items }) => ({
        id,
        title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">{title}</p>
            {items.map(({ id, ...categoryItem }) => (
              <CollectionItem
                key={id}
                className="collections__section"
                collectionTitle={title}
                {...categoryItem}
              />
            ))}
          </div>
        ),
      }))}
    />
  )
}

export default Collections
