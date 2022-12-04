/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i2-prod.mirror.co.uk',
        port: '',
        pathname: '/incoming/**',
      },
    ],
  },
}

module.exports = nextConfig
