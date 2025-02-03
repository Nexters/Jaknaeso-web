import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  env: {
    MAIN_HOST: process.env.NEXT_PUBLIC_MAIN_HOST,
    SERVER_HOST: process.env.NEXT_PUBLIC_MAIN_HOST,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'scss', 'styles')],
    silenceDeprecations: ['legacy-js-api'],
    additionalData: `@use '@/styles/scss/main.scss' as *;`,
  },
};

export default nextConfig;
