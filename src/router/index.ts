import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Index/Index.vue')
  },
  {
    path: '/ElementPage',
    name: 'ElementPage',
    component: () => import('../views/ElementPage/Index/Index.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
