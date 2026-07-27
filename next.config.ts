import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: path.resolve(process.cwd()) },
  experimental: {
    inlineCss: true,
  },
  images: {
    qualities: [60, 75],
  },
};

export default nextConfig;
