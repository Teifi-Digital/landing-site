const {NEXT_URL, API_URL} = require('./config/index');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [NEXT_URL, API_URL, 'localhost'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 120,
    layoutRaw: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
