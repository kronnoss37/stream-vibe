import useTitle from '@/hooks/useTitle'
import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'
import Devices from '@/sections/Devices'

const title = 'Home Page'

const HomePage = () => {
  useTitle(title)

  return (
    <>
      <Hero />
      <Categories />
      <Devices />
    </>
  )
}

export default HomePage
