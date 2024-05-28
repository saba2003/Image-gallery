import Gallery from "@/app/components/Gallery";

type Props = {
    params: {
        myParams: (string | undefined)[]
    }
}

export function generateMetadata({ params: {myParams} }: Props) {
    // "?" im myParams checks if myParams exists and isn't null.
    // The nullish coalescing (??) operator is a logical operator 
    // that returns its right-hand side operand when its left-hand side operand 
    // is null or undefined, and otherwise returns its left-hand side operand.
    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"
    
    return {
        title: `Results for ${topic} - Page ${page}`
    }
}

export default function SearchResults({ params: {myParams} }: Props) {
    
    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"
    
    return <Gallery topic={topic} page={page} />
}