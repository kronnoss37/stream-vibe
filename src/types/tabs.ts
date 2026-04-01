import type { ReactNode } from 'react'

export interface BaseTabItem {
  id: string
  title: string
}

export interface TabItemWithContent extends BaseTabItem {
  children: ReactNode
}
