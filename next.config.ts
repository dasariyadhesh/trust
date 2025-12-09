import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // REQUIRED for static export
  basePath: "/trust", // YOUR REPO NAME
  assetPrefix: "/trust/", // REQUIRED for CSS/JS/images
  images: {
    unoptimized: true,
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
