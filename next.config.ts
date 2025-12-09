import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // Required for static export
  output: "export",

  // Works locally AND on GitHub Pages
  basePath: isGitHubPages ? "/trust" : "",
  assetPrefix: isGitHubPages ? "/trust/" : "",

  images: {
    unoptimized: true, // GitHub Pages doesn't support image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
