/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.shopify.com", "hdnogkkvsjvmkpufcyao.supabase.co"],
  },
};

module.exports = nextConfig;
