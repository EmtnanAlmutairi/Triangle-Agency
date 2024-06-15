/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
// next.config.js
const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = nextConfig
