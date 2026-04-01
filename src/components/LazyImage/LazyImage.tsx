interface LazyImageProps {
  className?: string
  src: string
  width?: number
  height?: number
}

const LazyImage = ({ className, src, width, height }: LazyImageProps) => {
  return (
    <img
      className={className}
      src={src}
      alt=""
      width={width}
      height={height}
      loading="lazy"
    />
  )
}

export default LazyImage
