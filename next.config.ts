import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.SPRING_BOOT_URL + "/api/:path*",
      },
    ];
  },
  output: "standalone",
};

export default nextConfig;
