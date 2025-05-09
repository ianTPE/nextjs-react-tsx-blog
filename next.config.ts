import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // 如果使用外部圖像託管，請添加相應域名
  },
};

export default nextConfig;
