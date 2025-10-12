/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/neev-foundation',
  trailingSlash: true,
}

module.exports = nextConfig
