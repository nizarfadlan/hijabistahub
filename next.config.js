/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    disable: process.env.APP_ENV === 'development',
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/, /_middleware\.js$/, /_middleware\.js\.map$/, /middleware-runtime\.js$/, /middleware.*manifest\.js$/,]
  }
}

module.exports = withPWA(nextConfig)
