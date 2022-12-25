/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = withPlugins([
  [
    optimizedImages,
    {
      reactStrictMode: true,
      swcMinify: true,
      webpack: (cfg) => {
        cfg.module.rules.push({
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: { mode: ['react-component'] },
        });
        return cfg;
      },
    },
  ],
]);

module.exports = nextConfig;
