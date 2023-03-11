const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  /**
   * HtmlWebpackPlugin 默认情况下会生成自己的 index.html 文件
   */
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "production",
  // mode: "development",
  // optimization: {
  //   //标记导入导出，将生产环境下会摇下来的export模块标记为unused harmony export
  //   usedExports: true,
  // },
};
