/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "booking-app-bautista-onorato.s3.sa-east-1.amazonaws.com",
        port: "",
        pathname:  "/**"
      }
    ]
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
