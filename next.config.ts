import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/india-elevate-landing",
  assetPrefix: "/india-elevate-landing/",
};

export default nextConfig;
