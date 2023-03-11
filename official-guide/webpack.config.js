const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    //从 JavaScript 模块中导入 CSS 文件
    //即import './style.css'
    rules: [
      {
        test: /\.css$/i,
        /**
         * 先执行style-loader，然后执行css-loader
         * style-loader会使打包后的文件，是用js动态创建style标签进行引入
         */
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
