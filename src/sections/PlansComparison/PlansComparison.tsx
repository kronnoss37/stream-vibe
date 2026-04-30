import { useState } from 'react'
import Section from '@/layouts/Section'
import Table from '@/components/Table'
import Specifications from '@/components/Specifications'
import Tabs from '@/components/Tabs'
import { headCells, rows, type PlanHeadCell } from '@/data/planCellsAndRows'

const PlansComparison = () => {
  const data = {
    title: 'Compare our plans and find the right one for you',
    titleId: 'plans-comparison-title',
    description:
      "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.",
  }

  const tabItems = headCells
    .filter((cell): cell is PlanHeadCell & { tabsTitle: string } =>
      Boolean(cell.tabsTitle),
    )
    .map((headCell, headCellIndex) => ({
      id: `plans-comparison-${headCell.tabsTitle?.toLowerCase()}`,
      title: headCell.tabsTitle,
      children: (
        <Specifications
          items={rows.map(({ cells, isWide }) => ({
            title: cells[0],
            description: cells[headCellIndex + 1],
            isWide,
          }))}
        />
      ),
    }))

  const [activeId, setActiveId] = useState(tabItems[0].id)

  return (
    <Section className="plans-comparison" {...data}>
      <Table
        className="plans-comparison__table hidden-mobile"
        headCells={headCells}
        rows={rows}
      />
      <Tabs
        className="visible-mobile"
        title="plans-comparison-tabs-title"
        activeId={activeId}
        onChange={(id) => setActiveId(id)}
        items={tabItems}
        withInternalNavigation
      />
    </Section>
  )
}

export default PlansComparison
