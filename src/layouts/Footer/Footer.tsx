import { Link } from 'react-router'
import Socials from '@/components/Socials'
import { menuItems, extraLinks } from '@/data/footerItems'

import './Footer.scss'

const Footer = () => {
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
