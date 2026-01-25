import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // 👈 1. Generates static HTML/CSS/JS
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
