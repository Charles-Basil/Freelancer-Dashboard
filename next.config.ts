/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This helps with hydration errors
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}

module.exports = nextConfig