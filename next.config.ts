import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "*"
  ],
  experimental: {
    optimizePackageImports: ['motion/react'], // Optimize imports from motion/react
  }
};

export default nextConfig;
