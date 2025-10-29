import type { NextConfig } from "next";

const version = new Date().getTime(); // Timestamp-based cache busting

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Add version query string to static assets
  generateBuildId: async () => {
    return `build-${version}`;
  },
};

export default nextConfig;