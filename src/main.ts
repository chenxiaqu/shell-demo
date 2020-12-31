/*
 * @Author: 庞昭昭
 * @Date: 2020-10-21 11:28:22
 * @LastEditTime: 2020-12-15 16:19:35
 * @LastEditors: 庞昭昭
 * @Description: main.ts
 * @FilePath: \shell-demo\src\main.ts
 * @记得注释
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.scss';

// import NProgress from 'nprogress'; // 进度条
// import 'nprogress/nprogress.css'; // 样式必须引入

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
