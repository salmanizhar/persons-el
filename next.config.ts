import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: path.resolve(process.cwd()) },
  experimental: {
    inlineCss: true,
  },
  images: {
    deviceSizes: [360, 480, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [40, 60, 75],
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
