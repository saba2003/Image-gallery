import { cleanEnv, str } from "envalid"

// typescript don't trust process.env, so I install envalid and use it instead
const env = cleanEnv(process.env, {
    PEXELS_API_KEY: str(),
})

export default env