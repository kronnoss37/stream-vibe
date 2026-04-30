import { useState } from 'react'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import PlanCard from '@/components/PlanCard'
import Tabs from '@/components/Tabs'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import { planGroups } from '@/data/planGroups'

const Plans = () => {
  const [activeTabId, setActiveTabId] = useState(planGroups[0].id)

  const tabsTitle = 'plans-tabs'

  const data = {
    title: "Choose the plan that's right for you",
    titleId: 'plans-title',
    description:
      'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!',
    actions: (
      <TabsNavigation
        className="plans__tabs-navigation"
        title={tabsTitle}
        activeId={activeTabId}
        onChange={setActiveTabId}
        items={planGroups}
      />
    ),
  }

  return (
    <Section className="plans" {...data}>
      <div className="plans__body">
        <Tabs
          className="plans__tabs"
          title={tabsTitle}
          activeId={activeTabId}
          onChange={setActiveTabId}
          items={planGroups.map((planGroup) => ({
            ...planGroup,
            children: (
              <Grid columns={3}>
                {planGroup.items.map(({ id, ...planItem }) => (
                  <PlanCard key={id} {...planItem} />
                ))}
              </Grid>
            ),
          }))}
        />
      </div>
    </Section>
  )
}

export default Plans
