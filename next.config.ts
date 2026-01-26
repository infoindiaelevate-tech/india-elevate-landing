import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // ⚠️ Ensure this matches your repo name EXACTLY
  // basePath: "/india-elevate-landing",
  // assetPrefix: "/india-elevate-landing/", 
  trailingSlash: true,
};

export default nextConfig;
