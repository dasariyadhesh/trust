import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",             // 🚀 REQUIRED for static GitHub Pages
  basePath: "/trust",           // 🚀 repo name
  assetPrefix: "/trust/",       // 🚀 needed for CSS/JS paths
  images: {
    unoptimized: true,          // GitHub Pages does not support Next/Image
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
