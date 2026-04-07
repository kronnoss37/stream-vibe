import useTitle from '@/hooks/useTitle'
import MovieBanner from '@/sections/MovieBanner'
import MovieDetails from '@/sections/MovieDetails'

const title = 'Movie - Kantara'

const MoviesPage = () => {
  useTitle(title)

  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}

export default MoviesPage
