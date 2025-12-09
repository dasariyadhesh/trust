import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 🚀 REQUIRED for GitHub Pages
  basePath: '/trust', // 🚀 REQUIRED (your repo name)
  assetPrefix: '/trust/', // 🚀 REQUIRED
  images: {
    unoptimized: true, // GitHub Pages does not support Next image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
