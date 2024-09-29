/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: false, // Enable static image optimization
    unoptimized: false, // Set to false to optimize images
    domains: ['https://happymilan.vercel.app/'], // Your domain for external images
    formats: ['image/avif', 'image/webp'], // Enable AVIF and WebP formats for optimization
  },
}

module.exports = nextConfig;
