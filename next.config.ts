import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_TELEGRAM_BOT_URL: process.env.NEXT_TELEGRAM_BOT_URL,
    NEXT_MOKKY_API_URL: process.env.NEXT_MOKKY_API_URL,
  },
};

export default nextConfig;
