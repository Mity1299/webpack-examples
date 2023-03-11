const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    /**
     * 新增了一个入口
     * 这里的作用是可以让webpack对print做单独打包，从而html会引入这个东西
     */
    print: "./src/print.js",
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
};
