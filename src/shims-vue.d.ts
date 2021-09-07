/*
 * @Author: 庞昭昭
 * @Date: 2021-08-06 11:35:03
 * @LastEditTime: 2021-09-07 15:52:47
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\shims-vue.d.ts
 * 记得注释
 */
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'nprogress';

interface Window {
  qiankunStarted: any;
}
