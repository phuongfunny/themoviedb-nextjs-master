/** @type {import('next').NextConfig} */
const path = require("path");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  withSass,
  withCSS,
  images: {
    domains: ["www.themoviedb.org"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
