import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';
import { ArrayMethods } from '@/common/Array';
import ShellLayout from '@/layouts/ShellLayout/ShellLayout.vue';
import Menus from '@/components/Menus/Menus.vue';
import ShellTabs from '@/components/ShellTabs/ShellTabs.vue';
import RouterLink from '@/model/RouterLink';

@Component({
  components: { Menus, ShellLayout, ShellTabs }
})
export default class ElementPageIndex extends Vue {
  @State('menus') menus;
  @Mutation('setMenus') setMenus;

  // tab页
  defaultTab: RouterLink[] = [
    {
      path: '/ElementPage/HomePage',
      name: 'HomePage',
      meta: {
        title: '首页',
        isDel: false
      },
      children: []
    }
  ];

  mounted() {
    let menus: RouterLink[] = [
      {
        path: '/ElementPage/HomePage',
        name: 'HomePage',
        meta: {
          title: '首页',
          isDel: true
        },
        children: []
      },
      {
        path: '/ElementPage/Table',
        name: 'Table',
        meta: {
          title: '表格',
          isDel: true
        },
        children: []
      },
      {
        path: '/ElementPage/Dialog',
        name: 'Dialog',
        meta: {
          title: '对话框',
          isDel: true
        },
        children: []
      }
    ];
    // this.setMenus(menus);
    // let currentPageString = sessionStorage.getItem('currentPage');
    // if (currentPageString) {
    //   console.log('currentPageString', currentPageString);
    //   let currentPage = JSON.parse(currentPageString);
    //   this.defaultTab.push(currentPage);
    // }
  }
  /**
   *
   * @param link 左侧菜单栏传过来的跳转路径
   */
  selectLink(link: string) {
    this.$router.push({ path: link }).then(() => {
      // 判断全局存储内是已有当前路由记录
      let isDuplicates = ArrayMethods.isDuplicates(
        this.defaultTab,
        this.$route.name
      )[0];
      // 没有，则添加记录
      if (isDuplicates) {
        this.pushRoute(isDuplicates);
      } else {
        sessionStorage.setItem('currentPage', JSON.stringify(isDuplicates));
      }
    });
  }

  /**
   *
   * @param name 删除路由对象的name
   * @param index 删除路由对象下标
   */
  removeRoute(name: string, index: number) {
    // 删除当前tab
    this.defaultTab = this.defaultTab.filter(item => item.name !== name);
    // 删除当前tab，选中前一项
    this.selectTab(this.defaultTab[index - 1].path);
  }

  /**
   *
   * @param path tab页传过的跳转路径
   */
  selectTab(path: string) {
    this.$router.push({ path: path });
  }

  /**
   *
   * @param route 路由对象
   */
  pushRoute(route: any) {
    this.defaultTab.push(route);
  }

  /**
   * 返回首页大屏
   */
  backHome() {
    this.$router.push({ path: '/' });
  }
}
