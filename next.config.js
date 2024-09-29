/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
    domains: ['https://happymilan.vercel.app/'], // Add your domain if needed
    formats: ['image/avif', 'image/webp'], // Enable AVIF and WebP formats
  },
}

module.exports = nextConfig;
