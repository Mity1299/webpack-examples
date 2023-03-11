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
      /**
       * 加载图像
       * 允许JS引入图像，最终会将MyImage转化成打包后的image的url
       * import MyImage from './my-image.png'
       */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
