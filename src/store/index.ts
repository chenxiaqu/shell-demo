import Vue from 'vue';
import Vuex from 'vuex';
import { Commit } from 'vuex';
import RouterLink from '@/model/RouterLink';

Vue.use(Vuex);

export interface State {
  menus: RouterLink[]; // 路由
  route: any[]; // 路由
}

const store = new Vuex.Store({
  state: {
    menus: [], // 左侧导航栏
    route: [] // 全局存储的路由，tab可用
  },
  mutations: {
    // 创建菜单栏
    setMenus(state: State, menus: RouterLink[]) {
      state.menus = menus;
    },
    // 缓存选中路由
    pushRoute(state: State, Route: any[]) {
      state.route.push(Route);
    }
  },
  actions: {
    // 创建菜单栏
    setMenus(context: { commit: Commit }, menus) {
      context.commit('setMenus', menus);
    },
    // 缓存选中路由
    pushRoute(context: { commit: Commit }, route) {
      context.commit('pushr', route);
    }
  },
  modules: {}
});

export default store;
