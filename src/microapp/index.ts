/*
 * @Author: 庞昭昭
 * @Date: 2021-08-06 14:33:33
 * @LastEditTime: 2021-08-09 09:34:11
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
    },
    {
      name: 'sop',
      entry: '//portal.hd123.com/sop-web/test/index.html',
      container: '#frame',
      activeRule: '/sop'
    }
  ];
  static init() {
    registerMicroApps(this.microAppRouteList);
    // 启动 qiankun
    start();
  }
}
