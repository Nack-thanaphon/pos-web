/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  trailingSlash: true,
  images: {
    domains: ['www.jmthaifood.com', 'lh3.googleusercontent.com'],
  },
};

export default nextConfig;