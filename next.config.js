/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'openai-labs-public-images-prod.azureedge.net'
    ]
  }
}

module.exports = nextConfig
