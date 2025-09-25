import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    console.log(
      "All env vars:",
      Object.keys(process.env).filter((key) => key.includes("API"))
    );
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("API_URL:", process.env.API_URL);
    const apiUrl = process.env.API_URL || "http://localhost:8080";
    console.log("API_URL: ", apiUrl);

    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
  output: "standalone",
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
