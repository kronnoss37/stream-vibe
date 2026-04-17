import ShowBanner from '@/sections/ShowBanner'
import MovieDetails from '@/sections/MovieDetails'
import Seasons from '@/components/Seasons'

const ShowPage = () => {
  return (
    <>
      <ShowBanner />
      <MovieDetails seasons={<Seasons />} />
    </>
  )
}

export default ShowPage
