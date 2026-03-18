import { Link } from 'react-router'
import classNames from 'classnames'

import './Logo.scss'
import LogoImage from '/logo.svg'

interface LogoProps {
  className?: string
  loading?: 'lazy' | 'eager'
}

const Logo = ({ className, loading = 'lazy' }: LogoProps) => {
  const title = 'Home'

  return (
    <Link
      to="/"
      className={classNames(className, 'logo')}
      title={title}
      aria-label={title}
    >
      <img
        src={LogoImage}
        alt=""
        className="logo__imag"
        width={199}
        height={60}
        loading={loading}
      />
    </Link>
  )
}

export default Logo
