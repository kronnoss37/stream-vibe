import type { LinkItem, SocialLinkItem } from '@/types/links'

type BaseMenuItem = {
  title: string
  href: string
}

type MenuItem = BaseMenuItem & {
  type: 'menu'
  links: LinkItem[]
}

type SocialMenuItem = BaseMenuItem & {
  type: 'social'
  socialLinks: SocialLinkItem[]
}

type ExtraLinkItem = {
  label: string
  href: string
}

export const menuItems: (MenuItem | SocialMenuItem)[] = [
  {
    type: 'menu',
    title: 'Home',
    href: '/',
    links: [
      {
        label: 'Categories',
        href: '/',
      },
      {
        label: 'Devices',
        href: '/',
      },
      {
        label: 'Pricing',
        href: '/',
      },
      {
        label: 'FAQ',
        href: '/',
      },
    ],
  },
  {
    type: 'menu',
    title: 'Movies',
    href: '/movies',
    links: [
      {
        label: 'Gernes',
        href: '/',
      },
      {
        label: 'Trending',
        href: '/',
      },
      {
        label: 'New Release',
        href: '/',
      },
      {
        label: 'Popular',
        href: '/',
      },
    ],
  },
  {
    type: 'menu',
    title: 'Shows',
    href: '/movies',
    links: [
      {
        label: 'Gernes',
        href: '/',
      },
      {
        label: 'Trending',
        href: '/',
      },
      {
        label: 'New Release',
        href: '/',
      },
      {
        label: 'Popular',
        href: '/',
      },
    ],
  },
  {
    type: 'menu',
    title: 'Support',
    href: '/support',
    links: [
      {
        label: 'Contact Us',
        href: '/',
      },
    ],
  },
  {
    type: 'menu',
    title: 'Subscription',
    href: '/subscriptions',
    links: [
      {
        label: 'Plans',
        href: '/',
      },
      {
        label: 'Features',
        href: '/',
      },
    ],
  },
  {
    type: 'social',
    title: 'Connect With Us',
    href: '/',
    socialLinks: [
      {
        label: 'Facebook',
        href: '/',
        iconName: 'facebook',
      },
      {
        label: 'Twitter',
        href: '/',
        iconName: 'twitter',
      },
      {
        label: 'LinkedIn',
        href: '/',
        iconName: 'linked-in',
      },
    ],
  },
]

export const extraLinks: ExtraLinkItem[] = [
  {
    label: 'Terms of Use',
    href: '/',
  },
  {
    label: 'Privacy Policy',
    href: '/',
  },
  {
    label: 'Cookie Policy',
    href: '/',
  },
]
