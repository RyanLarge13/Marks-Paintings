/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
             {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/marks_paintings/**",
      },
        ]
    }
};

export default nextConfig;
