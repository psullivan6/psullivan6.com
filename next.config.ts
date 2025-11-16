import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  // Note: Using the Rust compiler means we cannot use
  // rehype or remark plugins. If you need them, remove
  // the `experimental.mdxRs` flag.
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
