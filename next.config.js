const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

module.exports = withContentlayer(nextConfig);
