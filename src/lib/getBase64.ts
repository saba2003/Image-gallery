// Blurring images when loading them instead of showing blanks

import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "@/models/Images";

// helper function that works on one image 
async function getBase64(imageUrl: string){
    try {
        const res = await fetch(imageUrl)
        if(!res.ok) throw new Error(`Fetch failed ${res.status}: ${res.statusText}`)

        const buffer = await res.arrayBuffer()
        const { base64 } = await getPlaiceholder(Buffer.from(buffer))

        return base64
    } catch (error) {
        if(error instanceof Error) console.log(error.stack)
    }
}

//generaing blurred data urls for images
export default async function addBlurredDataUrls(images:ImagesResults): Promise<Photo[]> {
    //making all requests at once instead of individually

    // array of promises
    const base64Promises = images.photos.map(photo => getBase64
        (photo.src.large))

    // resolving all requests in order
    const base64Results = await Promise.all(base64Promises)
        
    const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
        photo.blurredDataUrl = base64Results[i]
        return photo
    })

    return photosWithBlur
}