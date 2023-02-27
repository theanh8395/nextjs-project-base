/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    apiBaseURL: process.env.API_BASE_URL,
  },
  images: {
    // All Images
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
    domains: [],
  },
};

module.exports = nextConfig;
