import classNames from 'classnames'
import { AnchorButton } from '@/components/Button'
import type { SocialLinkItem } from '@/types/links'

import './Socials.scss'

interface SocialsProps {
  className?: string
  links: SocialLinkItem[]
}

const Socials = ({ className, links }: SocialsProps) => {
  return (
    <div className={classNames(className, 'soc1als')}>
      <ul className="soc1als__list">
        {links.map(({ label, href, iconName }, index) => (
          <li key={index} className="soc1als__item">
            <AnchorButton
              className="soc1als__link"
              mode="black-10"
              href={href}
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
