import { Outlet, useLocation } from 'react-router'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

const MainLayout = () => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <>
      <Header isHomePage={isHomePage} />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  )
}

export default MainLayout
