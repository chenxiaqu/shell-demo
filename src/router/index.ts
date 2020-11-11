import Vue from 'vue';
import VueRouter, { RawLocation, RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location: RawLocation) {
  return originalPush.call(this, location).catch(err => err);
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Index/Index.vue')
  },
  {
    path: '/ElementPage',
    name: 'ElementPage',
    component: () => import('../views/ElementPage/Index/Index.vue'),
    redirect: '/ElementPage/HomePage',
    children: [
      {
        path: '/ElementPage/HomePage',
        name: 'HomePage',
        component: () => import('../views/ElementPage/HomePage/HomePage.vue')
      },
      {
        path: '/ElementPage/Table',
        name: 'Table',
        component: () => import('../views/ElementPage/Table/Table.vue')
      },
      {
        path: '/ElementPage/Dialog',
        name: 'Dialog',
        component: () => import('../views/ElementPage/Dialog/Dialog.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
