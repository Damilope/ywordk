import mdxNext from "@next/mdx";

const withMDX = mdxNext();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    instrumentationHook: true,
  },
};

export default withMDX(nextConfig);
