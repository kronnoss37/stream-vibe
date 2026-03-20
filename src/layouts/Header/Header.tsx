import { NavLink } from 'react-router'
import classNames from 'classnames'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

import './Header.scss'
import { useEffect, useState } from 'react'

interface HeaderProps {
  isHomePage?: boolean
}

type MenuItem = {
  label: string
  href: string
}

const Header = ({ isHomePage }: HeaderProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const lockClassName = 'is-lock'

    if (isDialogOpen) {
      document.documentElement.classList.add(lockClassName)
    } else {
      document.documentElement.classList.remove(lockClassName)
    }

    return () => {
      document.documentElement.classList.remove(lockClassName)
    }
  }, [isDialogOpen])

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev)
  }

  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Movies & Shows',
      href: '/movies',
    },
    {
      label: 'Support',
      href: '/support',
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions',
    },
  ]

  return (
    <header
      className={classNames('header', {
        'is-fixed': isHomePage,
      })}
    >
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <dialog className="header__overlay-menu-dialog" open={isDialogOpen}>
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li key={index} className="header__menu-item">
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      classNames('header__menu-link', {
                        'is-active': isActive,
                      })
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="search"
            />
            <Button
              className="header__button"
              label="Notifications"
              isLabelHidden
              mode="transparent"
              iconName="notification"
            />
          </div>
        </dialog>
        <BurgerButton
          className="header__burger-button visible-tablet"
          isActive={isDialogOpen}
          onClick={toggleDialog}
        />
      </div>
    </header>
  )
}

export default Header
