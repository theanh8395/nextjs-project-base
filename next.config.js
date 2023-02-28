/** @type {import('next').NextConfig} */
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

const pluginAntdLess = withAntdLess({
  lessVarsFilePath: "./styles/utilities/variables.less",
  cssLoaderOptions: {},
  nextjs: {
    localIdentNameFollowDev: true,
  },
  webpack(config) {
    return config;
  },
});

const nextConfig = {
  reactStrictMode: true,
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

module.exports = withPlugins([[pluginAntdLess]], nextConfig);
