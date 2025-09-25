import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Docker에서 필요
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", process.env.VERCEL_URL].filter(
        (origin): origin is string => typeof origin === "string"
      ),
    },
  },
  trailingSlash: false,
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
