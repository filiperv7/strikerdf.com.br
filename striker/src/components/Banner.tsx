import striker from '@/public/assets/STRIKER.png'
import Image from 'next/image'

interface BannerProps {
  className?: string
}

export function Banner({ className }: BannerProps) {
  return (
    <div className={`flex items-center justify-center ${className ?? ''}`}>
      <div className="relative flex h-screen w-full">
        <div className="flex-1 max-[670px]:hidden">
          <Image
            className="h-full w-full object-cover"
            src="https://www.strikerdf.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimagem01.48430bc4.webp&w=3840&q=75"
            alt=""
            loading="lazy"
            width={2000}
            height={2000}
          />
        </div>
        <div className="flex-1 max-[670px]:hidden">
          <Image
            className="h-full w-full object-cover"
            src="https://www.strikerdf.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimagem02.2871ee8d.webp&w=1920&q=75"
            alt=""
            loading="lazy"
            width={2000}
            height={2000}
          />
        </div>
        <div className="flex-1">
          <Image
            className="h-full w-full object-cover"
            src="https://www.strikerdf.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimagem03.b41afda0.webp&w=3840&q=75"
            alt=""
            loading="lazy"
            width={2000}
            height={2000}
          />
        </div>
        <div className="flex-1 max-[670px]:hidden">
          <Image
            className="h-full w-full object-cover"
            src="https://www.strikerdf.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimagem04.84b669b3.webp&w=3840&q=75"
            alt=""
            loading="lazy"
            width={2000}
            height={2000}
          />
        </div>
      </div>

      <div className="absolute z-10 sm:mt-8">
        <Image
          src={striker}
          alt=""
          width={250}
          height={250}
          className="max-[426px]:w-48"
        />
      </div>
    </div>
  )
}
