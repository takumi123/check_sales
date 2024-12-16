import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'max-body-size',
            value: '4096mb', // 4GB
          },
        ],
      },
    ];
  },
};

export default nextConfig;
