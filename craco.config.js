const path = require("path");
const cracoLess = require("craco-less");
// const babelImport = require("babel-plugin-import");
const addPath = dir => path.join(__dirname, dir);

module.exports = {
  webpack: {
    configure: (webpackConfig, {env, paths}) => {
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks


      };
      return webpackConfig;
    },
    alias: {
      "@": addPath("src")
    }
  },
  devServer: {
    open: true,
    port: 8002
  },
  plugins: [
    {
      plugin: cracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            sourceMap: true
          }
        }
      }
    }
  ]
};
