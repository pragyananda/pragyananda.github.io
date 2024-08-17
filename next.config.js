/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  export: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'the-folio.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
