/*
 * @Author: your name
 * @Date: 2021-04-27 11:56:20
 * @LastEditTime: 2021-05-07 08:55:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\vue.config.js
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  // 将entry指向examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  // 为packages目录添加babel-loader处理
  // chainWebpack: config => {
  //     config.module
  //     .rule('js')
  //     .include
  //         .add(resolve('packages'))
  //         .end()
  //     .use('babel')
  //         .loader('babel-loader')
  //         .tap(options => {
  //             return options
  //         })
  // }
};
