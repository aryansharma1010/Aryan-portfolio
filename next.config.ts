import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aryanportfoliogfg.vercel.app",
        pathname: "/_next/image**",
      },
    ],
  },
};

export default nextConfig;
