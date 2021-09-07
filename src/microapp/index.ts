/*
 * @Author: 庞昭昭
 * @Date: 2021-08-06 14:33:33
 * @LastEditTime: 2021-09-07 16:38:41
 * @LastEditors: 庞昭昭
 * @Description: 微前端应用
 * @FilePath: \shell-demo\src\microapp\index.ts
 * 记得注释
 */
import { registerMicroApps, start } from 'qiankun';

export default class MicroApp {
  static microAppRouteList = [
    {
      name: 'micro-vue',
      entry: '//localhost:3000',
      container: '#container',
      activeRule: '/micro-vue'
    }
  ];
  static init() {
    registerMicroApps(this.microAppRouteList);
    // 启动 qiankun
    start();
  }
}
