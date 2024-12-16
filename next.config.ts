import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '4gb'
    }
  },
  api: {
    bodyParser: false,
    responseLimit: false,
  }
};

export default nextConfig;
