import TerserPlugin from 'terser-webpack-plugin';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        o1js: path.resolve(__dirname, 'node_modules/o1js/dist/web/index.js'),
      };

      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        victory: {
          test: /o1js@1.6.0/,
          name: 'o1js',
          priority: 50,
          reuseExistingChunk: true,
        },
      };
    }

    config.experiments = { ...config.experiments, topLevelAwait: true };
    return {
      ...config,
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            minify: TerserPlugin.swcMinify,
            terserOptions: {
              sourceMap: false,
              compress: false,
              mangle: {
                keep_classnames: true,
                keep_fnames: true,
              }
            },
            exclude: /node_modules/,
          }),
        ],
      },
    };
  },
  eslint: {
    dirs: ['app', 'components', 'constants', 'containers', 'games', 'lib'],
  },
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ['@zknoid/sdk', '@zknoid/games', 'zknoid-chain-dev'],
  },
  productionBrowserSourceMaps: false,
  transpilePackages: ['@zknoid/sdk', '@zknoid/games', 'zknoid-chain-dev'],
};

export default nextConfig;
