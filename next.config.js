/** @type {import('next').NextConfig} */
// ignoreBuildErrors is true because we want ignore localStorage is not defined error
const nextConfig = {
    ignoreBuildErrors: true,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },

}

module.exports = nextConfig


/*
    experimental: {
        serverActions: true
    }
*/