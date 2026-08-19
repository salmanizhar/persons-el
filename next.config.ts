import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/elektriker/helsingborg",
        destination: "/",
        permanent: true,
      },
    ];
  },
  turbopack: { root: path.resolve(process.cwd()) },
  experimental: {
    inlineCss: true,
  },
  images: {
    deviceSizes: [360, 480, 560, 640, 750, 828, 1080, 1200, 1600, 1920],
    formats: ["image/avif", "image/webp"],
    qualities: [40, 60, 75],
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
