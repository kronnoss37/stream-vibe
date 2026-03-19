import { Link } from 'react-router'
import Socials from '@/components/Socials'
import type { LinkItem, SocialLinkItem } from '@/types/links'

import './Footer.scss'

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

const Footer = () => {
  const menuItems: (MenuItem | SocialMenuItem)[] = [
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

  const extraLinks: ExtraLinkItem[] = [
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

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map((item, index) => (
            <div key={index} className="footer__menu-column">
              <Link to={item.href} className="footer__menu-title h6">
                {item.title}
              </Link>
              {item.type === 'menu' && item.links?.length > 0 && (
                <ul className="footer__menu-list">
                  {item.links.map(({ label, href }, index) => (
                    <li key={index} className="footer__menu-item">
                      <a href={href} className="footer__menu-link">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {item.type === 'social' && item.socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={item.socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__copyright">
            @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
          </p>
          <ul className="footer__extra-links">
            {extraLinks.map(({ label, href }, index) => (
              <li key={index} className="footer__extra-item">
                <a href={href} className="footer__extra-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
