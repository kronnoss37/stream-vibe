import useTitle from '@/hooks/useTitle'
import MoviesBanner from '@/sections/MoviesBanner'

const title = 'Movies & Shows Page'

const MoviesPage = () => {
  useTitle(title)

  return (
    <>
      <MoviesBanner />
    </>
  )
}

export default MoviesPage
