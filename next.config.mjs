/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["127.0.0.1", "93.127.195.143", "http://93.127.195.143"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "93.127.195.143",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cms.instantbackgroundremover.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cms.instantbackgroundremover.comundefined",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
