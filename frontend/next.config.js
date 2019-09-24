const withSourceMaps = require("@zeit/next-source-maps");

// const path = require("path");

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const nextConfig = compose(withSourceMaps)({
  webpack: config => {
    // Allow absolute imports of components and stylesheets
    // config.resolve.alias['components'] = path.join(__dirname, 'components');
    // config.resolve.alias['stylesheets'] = path.join(__dirname, 'stylesheets');

    config.module.rules.push({
      test: /\.svg$/,
      loader: "svg-sprite-loader"
    });

    return config;
  }
});

module.exports = nextConfig;
