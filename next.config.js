/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone for Netlify (reduces deploy size)
  output: 'standalone',
  // Enable modern JS (remove legacy polyfills)
  experimental: {
    optimizeCss: true,
  },
  // Cache static assets
  headers: async () => [
    {
      source: '/_next/static/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ],
};

module.exports = nextConfig;
