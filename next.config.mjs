/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Enable the default loader for local images
        loader: 'default',

        // Allow images from specific external domains
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',  // GitHub
            },
            {
                protocol: 'https',
                hostname: 'amezadomultimedia5.pixieset.com',  // Pixieset (specific subdomain)
            },
            {
                protocol: 'https',
                hostname: 'pixieset.com',  // Pixieset (general domain)
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',  // Unsplash (specific subdomain)
            },
            {
                protocol: 'https',
                hostname: 'github.com',  // Github (main domain)
            },
        ],
    },
};

export default nextConfig;
