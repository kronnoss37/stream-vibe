import useTitle from '@/hooks/useTitle'
import Hero from '@/sections/Hero'
import Categories from '@/sections/Categories'

const title = 'Home Page'

const HomePage = () => {
  useTitle(title)

  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}

export default HomePage
