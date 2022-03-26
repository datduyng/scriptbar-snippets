const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer()({
  reactStrictMode: true,
})

module.exports = nextConfig
