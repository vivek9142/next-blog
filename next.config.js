/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        DB: "nextBlog-dev",
        DB_USER: "Vivek",
      },
    };
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      DB: "nextBlog",
      DB_USER: "Vivek",
    },
  };
};

module.exports = nextConfig;
