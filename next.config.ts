/** @type {import('next').NextConfig} */
const nextConfig = {
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
      allowedOrigins: ["localhost:3000", process.env.VERCEL_URL],
    },
  },
};

export default nextConfig;
