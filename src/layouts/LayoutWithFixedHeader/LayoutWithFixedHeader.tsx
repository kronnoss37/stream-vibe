import { Outlet } from 'react-router'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Banner from '@/sections/Banner'
import Footer from '@/layouts/Footer'

const LayoutWithFixedHeader = () => {
  return (
    <>
      <Header isFixed />
      <Content isResetPaddingTop>
        <Outlet />
        <Banner />
      </Content>
      <Footer />
    </>
  )
}

export default LayoutWithFixedHeader
