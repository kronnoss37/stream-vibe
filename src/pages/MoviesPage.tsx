import useTitle from '@/hooks/useTitle'
import MoviesBanner from '@/sections/MoviesBanner'
import Collections from '@/sections/Collections'

const title = 'Movies & Shows Page'

const MoviesPage = () => {
  useTitle(title)

  return (
    <>
      <MoviesBanner />
      <Collections />
    </>
  )
}

export default MoviesPage
