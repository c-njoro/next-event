/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "wembleypark.com",
      "imgs.search.brave.com",
      "src/components/images",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
