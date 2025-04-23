import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Recommended for Cloudflare Pages
  experimental: {
    // Enable optimizations for Cloudflare Workers
    optimizeCss: true,
    // Improve code-splitting
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
