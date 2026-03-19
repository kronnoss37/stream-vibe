import type { IconName } from '@/components/Icon'

export type LinkItem = {
  label: string
  href: string
}

export type SocialLinkItem = {
  iconName: IconName
} & LinkItem
