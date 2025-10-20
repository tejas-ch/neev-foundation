/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/NEEV-foundation',
  assetPrefix: '/NEEV-foundation/',
  trailingSlash: true,
}

module.exports = nextConfig
