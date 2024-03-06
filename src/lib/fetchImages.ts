import { ImagesResults, ImagesSchemaWithPhotos } from "@/models/Images";
// created seperate env file, because typescript didn't like process.env
import env from "./env";

export default async function fetchImages(url: string): 
    Promise<ImagesResults | undefined> {
    try {
        // fetching the image data from PEXELS_API
        const response = await fetch(url, {
            headers: {
                Authorization: env.PEXELS_API_KEY 
            }
        })

        // check res status
        if(!response.ok) throw new Error("Image Fetch failed \n")

        const imagesResults: ImagesResults = await response.json()
        // parse data with zod schema
        const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)
        
        // check if any images are fetched
        if(parsedData.total_results === 0) return undefined

        return parsedData
    } catch (e) {
        // logging errors into console
        if(e instanceof Error) console.log(e.stack)
    }
}