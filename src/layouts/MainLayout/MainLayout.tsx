import { Outlet } from 'react-router'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Banner from '@/sections/Banner'
import Footer from '@/layouts/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
        <Banner />
      </Content>
      <Footer />
    </>
  )
}

export default MainLayout
