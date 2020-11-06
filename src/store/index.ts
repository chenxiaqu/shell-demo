import Vue from 'vue';
import Vuex from 'vuex';
import { Commit } from 'vuex';
import RouterLink from '@/model/RouterLink';

Vue.use(Vuex);

export interface State {
  menus: RouterLink[]; // 路由
}

const store = new Vuex.Store({
  state: {
    menus: [] // 左侧导航栏
  },
  mutations: {
    setMenus(state: State, menus: RouterLink[]) {
      state.menus = menus;
    }
  },
  actions: {
    setMenus(context: { commit: Commit }, menus) {
      context.commit('setMenus', menus);
    }
  },
  modules: {}
});

export default store;
