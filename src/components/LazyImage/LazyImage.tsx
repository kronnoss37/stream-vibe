interface LazyImageProps {
  className?: string
  src: string
  alt?: string
  title?: string
  width?: number
  height?: number
}

const LazyImage = ({
  className,
  src,
  width,
  height,
  title,
}: LazyImageProps) => {
  return (
    <img
      className={className}
      src={src}
      alt=""
      title={title}
      width={width}
      height={height}
      loading="lazy"
    />
  )
}

export default LazyImage
