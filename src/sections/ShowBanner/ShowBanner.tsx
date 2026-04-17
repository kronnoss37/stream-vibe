import MovieBannerCard from '@/components/MovieBannerCard'
import ShowBannerImg from '@/assets/images/movie-banner/3.jpg'

const ShowBanner = () => {
  const titleId = 'show-banner-title'

  return (
    <MovieBannerCard
      title="Stranger Things"
      titleId={titleId}
      TitleTag="h1"
      description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
      imgSrc={ShowBannerImg}
      isSmallPaddingY
    />
  )
}

export default ShowBanner
