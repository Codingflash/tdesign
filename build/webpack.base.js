const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 把打包后的文件直接注入到html模板中
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    
  entry: {
    index: "./src/main.js",
  }, // 设置开发模式
  output: {
    path: path.resolve(__dirname, "../dist"), // 动态获取出口路径(绝对路径)-文件编译后的位置
    filename: "bundle.js", // 出口文件名
    },
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      { test: /\.js$/,exclude:/node_modules/, use: "babel-loader" },
      { test: /\.css/, use: ["vue-style-loader", "css-loader"] },
      {
        test: /\.less/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader",
        options: {
          esModule: false,
        },
      },
      { test: /\.html$/, use: "html-loader" },
      ],
    },
    stats: { entrypoints: false,children: false }
  ,
  plugins: [
      new HtmlWebpackPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
    },
  },
};
