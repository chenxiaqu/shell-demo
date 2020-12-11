/*
 * @Author: 庞昭昭
 * @Date: 2020-10-23 20:42:34
 * @LastEditTime: 2020-12-11 17:13:10
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\vue.config.js
 * @记得注释
 */
const path = require('path');
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/css/base.scss";'
      }
    }
  }
};
