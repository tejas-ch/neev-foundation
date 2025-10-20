/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/neev-foundation' : '',
  assetPrefix: isProd ? '/neev-foundation/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
