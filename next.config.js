const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  images: {
    domains: ["mmbiz.qpic.cn"],
  },
};

module.exports = withContentlayer(nextConfig);
