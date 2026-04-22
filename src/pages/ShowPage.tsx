import useTitle from '@/hooks/useTitle'
import ShowBanner from '@/sections/ShowBanner'
import MovieDetails from '@/sections/MovieDetails'
import Seasons from '@/components/Seasons'

const title = 'Show - Stranger Things'

const ShowPage = () => {
  useTitle(title)

  return (
    <>
      <ShowBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}

export default ShowPage
