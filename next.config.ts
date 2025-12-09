/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ⭐ required instead of next export
  distDir: "out",     // ⭐ GitHub Pages uses this folder

  // If deploying to a subfolder:
  // example: https://dasariyadhesh.github.io/trust
  basePath: "/trust",
  assetPrefix: "/trust/",

  images: {
    unoptimized: true,
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
