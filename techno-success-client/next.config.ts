import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://technosuccess.ru/images/**')],
  },
}

export default nextConfig;
