const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    /**
     * 新增了一个入口
     * 这里的作用是可以让webpack对print做单独打包，从而html会引入这个东西
     */
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
