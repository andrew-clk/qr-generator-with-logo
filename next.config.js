/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['chart.googleapis.com', 'api.qrserver.com'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig