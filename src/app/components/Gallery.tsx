import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";

export default async function Gallery() {
    const url = 'https://api.pexels.com/v1/curated'

    // either returns images or "undefined"
    const images: 
        ImagesResults | undefined = await fetchImages(url)

    // if no images are returned show a single h2
    if(!images) 
    return <h2 className="m-4 text-2xl font-bold">No images found</h2>
    
    return (
        <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
            
            {images.photos.map(photo => (
                <ImgContainer key={photo.id} photo={photo} />
            ))}
            
        </section>
    )
}
