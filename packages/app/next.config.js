const withSourceMaps = require("@zeit/next-source-maps");

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

module.exports = compose(withSourceMaps)({
  publicRuntimeConfig: {
    ROOT_URL: process.env.ROOT_URL,
    GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL
  },
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
