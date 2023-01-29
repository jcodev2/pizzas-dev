/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'openai-labs-public-images-prod.azureedge.net'
    ]
  },
  env: {
    SUPABASE_URL: 'https://aroymlgjkmfbqdrnsjch.supabase.co',
    SUPABASE_KEY:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyb3ltbGdqa21mYnFkcm5zamNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NzA3ODgsImV4cCI6MTk4ODM0Njc4OH0.aQcuSSFQvA3AiBm-oyP7NUac5dyseO8BWAWY3XyXwh0'
  }
}

module.exports = nextConfig
