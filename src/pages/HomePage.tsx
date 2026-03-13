import useTitle from '@/hooks/useTitle'

const title = 'Home Page'

const HomePage = () => {
  useTitle(title)

  return <div>HomePage</div>
}

export default HomePage
