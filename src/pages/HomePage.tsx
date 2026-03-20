import useTitle from '@/hooks/useTitle'
import Hero from '@/sections/Hero'

const title = 'Home Page'

const HomePage = () => {
  useTitle(title)

  return (
    <>
      <Hero />
    </>
  )
}

export default HomePage
