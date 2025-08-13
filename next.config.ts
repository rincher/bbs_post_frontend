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
  env: {
    SPRING_BOOT_URL: process.env.SPRING_BOOT_URL || "http://localhost:8080",
  },
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", process.env.VERCEL_URL].filter(
        (origin): origin is string => typeof origin === "string"
      ),
    },
  },
  // 정적 파일 처리 최적화
  trailingSlash: false,
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
