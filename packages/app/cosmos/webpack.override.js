var webpack = require("webpack");

module.exports = (config, env) => {
  return {
    ...config,
    plugins: [
      ...(config.plugins || []),
      new webpack.ProvidePlugin({
        React: "react"
      })
    ],
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },

        {
          test: /\.graphql$/,
          exclude: /node_modules/,
          use: [{ loader: "babel-loader" }, { loader: "graphql-let/loader" }]
        },

        {
          test: /\.graphqls$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader"
        }
      ]
    },
    resolve: {
      extensions: [...config.resolve.extensions, ".js", ".jsx"]
    }
  };
};
