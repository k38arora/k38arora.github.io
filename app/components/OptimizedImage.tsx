import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  sizes?: string
  priority?: boolean
}

export default function OptimizedImage({ src, alt, width, height, className = '', sizes, priority }: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
    />
  )
}
