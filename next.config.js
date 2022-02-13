/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  target: "serverless",
  eslint: {
    dirs: ['pages', 'components', 'styles/styled-components/*'],
  },
  env: {
    APP_URL: process.env.APP_URL,
    APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    APP_NAME: process.env.APP_NAME,
    FACEBOOK_URL: process.env.FACEBOOK_URL,
    LINKEDIN_URL: process.env.LINKEDIN_URL,
    DEVELOPER_NAME: process.env.DEVELOPER_NAME,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
  webpack: (
    config,
    { buildId, dev, isServer, inlineFontLimit, assetPrefix = '' }
  ) => {
    const serverPrefix = isServer ? '../' : '';
    const filenamePattern = '[name].[hash:8].[ext]';
    const limit = inlineFontLimit || 8192;
    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
            loader: '@svgr/webpack',
            options: {
              limit,
              fallback: 'file-loader',
              publicPath: `${assetPrefix}/_next/static/media/`,
              outputPath: `${serverPrefix ? '../' : ''}static/media/`,
              name: filenamePattern,
            },
          },
        {
          loader: 'file-loader',
          options: {
            publicPath: `${assetPrefix}/_next/static/media/`,
            outputPath: `${serverPrefix}static/media/`,
          },
        },
      ],
    });

    return config;
  },
}
