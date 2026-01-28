/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Enable compression
  compress: true,
  
  // Remove X-Powered-By header for security
  poweredByHeader: false,
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Optimize production builds
  swcMinify: true,
};

export default nextConfig;