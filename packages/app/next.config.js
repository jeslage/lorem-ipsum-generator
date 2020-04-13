const withSourceMaps = require("@zeit/next-source-maps");

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

module.exports = compose(withSourceMaps)({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }]
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  }
});
