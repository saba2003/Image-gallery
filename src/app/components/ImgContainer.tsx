import type { Photo } from "@/models/Images"
import Image from "next/image"

type Props = {
    photo: Photo
}

export default function ImgContainer({ photo }: Props) {
  return (
    <div key={photo.id} 
        className="h-64 bg-gray-200 rounded-xl 
                    relative overflow-hidden group">
        <Image 
            src={photo.src.large} 
            alt={photo.alt}
            fill={true}
            sizes="(min-width: 1320px) 278px, (min-width: 1060px) calc(9.58vw + 153px), (min-width: 800px) 33.33vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            className="object-cover group-hover:opacity-75 cursor-pointer"
        />
    </div>
  )
}
