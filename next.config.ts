import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
