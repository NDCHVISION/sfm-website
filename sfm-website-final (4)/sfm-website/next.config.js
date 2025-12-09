/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
}
module.exports = nextConfig
