/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                // ** is a wildcard, which means anything goes
                pathname: '/photos/**'
            }
        ]
    }
};

export default nextConfig;
