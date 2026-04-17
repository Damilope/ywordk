import mdxNext from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const withMDX = mdxNext({
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    instrumentationHook: true,
  },
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer, dev }) => {
    // Only generate source maps for production builds
    if (isServer && !dev) {
      config.devtool = "source-map";
    }
    return config;
  },
};

export default withMDX(nextConfig);
