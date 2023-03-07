var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
    new DashboardPlugin(),
  ],

  mode: "development",
  // mode: "production",
  entry: {
    pageA: "./src/pageA",
    pageB: "./src/pageB",
    pageC: "./src/pageC",
  },
  optimization: {
    chunkIds: "named", // 指定打包过程中的chunkId，设为named会生成可读性好的chunkId，便于debug
    splitChunks: {
      minSize: 0, // 默认30000（30kb），但是demo中的文件都很小，minSize设为0，让每个文件都满足大小条件
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // 默认为3
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: false,
        },
      },
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
};
