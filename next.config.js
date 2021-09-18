/** @type {import('next').NextConfig} */
const path = require("path");
const withSass = require("@zeit/next-sass");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  withSass,
  images: {
    domains: ["www.themoviedb.org"],
  },
};

module.exports = nextConfig;
