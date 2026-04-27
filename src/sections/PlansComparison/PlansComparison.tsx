import { useState } from 'react'
import Section from '@/layouts/Section'
import Table, { type HeadCell, type RowItem } from '@/components/Table'
import Badge from '@/components/Badge'
import Specifications from '@/components/Specifications'
import Tabs from '@/components/Tabs'

type PlanHeadCell = {
  tabsTitle?: string
} & HeadCell

type PlanRowItem = {
  isWide?: boolean
} & RowItem

const PlansComparison = () => {
  const data = {
    title: 'Compare our plans and find the right one for you',
    titleId: 'plans-comparison-title',
    description:
      "StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.",
  }

  const headCells: PlanHeadCell[] = [
    {
      children: 'Features',
      width: '25%',
    },
    {
      children: 'Basic',
      width: '25%',
      tabsTitle: 'Basic',
    },
    {
      children: (
        <>
          Standard&nbsp;&nbsp;<Badge mode="accent">Popular</Badge>
        </>
      ),
      width: '25%',
      tabsTitle: 'Standard',
    },
    {
      children: 'Premium',
      width: '25%',
      tabsTitle: 'Premium',
    },
  ]

  const rows: PlanRowItem[] = [
    {
      cells: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month'],
    },
    {
      cells: [
        'Content',
        'Access to a wide selection of movies and shows, including some new releases.',
        'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
      ],
      isWide: true,
    },
    {
      cells: [
        'Devices',
        'Watch on one device simultaneously',
        'Watch on Two device simultaneously',
        'Watch on Four device simultaneously',
      ],
      isWide: true,
    },
    {
      cells: ['Free Trail', '7 Days', '7 Days', '7 Days'],
    },
    {
      cells: ['Cancel Anytime', 'Yes', 'Yes', 'Yes'],
    },
    {
      cells: ['HDR', 'No', 'Yes', 'Yes'],
    },
    {
      cells: ['Dolby Atmos', 'No', 'Yes', 'Yes'],
    },
    {
      cells: ['Ad - Free', 'No', 'Yes', 'Yes'],
    },
    {
      cells: [
        'Offline Viewing',
        'No',
        'Yes, for select titles.',
        'Yes, for all titles.',
      ],
    },
    {
      cells: [
        'Family Sharing',
        'No',
        'Yes, up to 5 family members.',
        'Yes, up to 6 family members.',
      ],
    },
  ]

  const tabItems = headCells
    .filter(({ tabsTitle }) => tabsTitle)
    .map((headCell, headCellIndex) => ({
      id: `plans-comparison-${headCell.tabsTitle?.toLowerCase()}`,
      title: headCell.tabsTitle as string,
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
