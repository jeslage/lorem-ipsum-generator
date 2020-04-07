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
          test: /\.graphql$/,
          loader: "webpack-graphql-loader",
          options: {
            output: "document"
          }
        },
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
          test: /\.svg$/,
          loader: "svg-sprite-loader"
        }
      ]
    },
    resolve: {
      extensions: [...config.resolve.extensions, ".js", ".jsx"]
    }
  };
};
