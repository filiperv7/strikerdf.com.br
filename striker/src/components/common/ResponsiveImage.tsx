import Image from 'next/image'

interface ResponsiveImageProps {
  image: any
  className?: string
}

export default function ResponsiveImage({
  image,
  className
}: ResponsiveImageProps) {
  return (
    <Image
      src={image}
      alt="Imagem"
      className={`
                w-[100%] h-[120px]
                sm:w-[200px] sm:h-[330px]
                md:w-[350px] md:h-[365px]
                lg:w-[550px] lg:h-[365px]
                rounded-xl object-cover
                ${className ?? ''}
            `}
    />
  )
}
