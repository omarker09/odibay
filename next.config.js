const TerserPlugin = require('terser-webpack-plugin');

// @ts-ignore
module.exports = {
 //   output: 'export',
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer, dev }) => {
    // Only use TerserPlugin in production
    if (!dev) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            mangle: true,
            compress: {
              drop_console: true,
            },
          },
        })
      );
    }

    return config;
  },
};
