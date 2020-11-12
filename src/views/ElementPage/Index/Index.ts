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
    this.setMenus(menus);
    // 添加sessionStorage存储的最后一个路由对象到tab数据中，首页除外
    let currentPageString = sessionStorage.getItem('currentPage');
    // 避免首次进入系统时为空的情况
    if (currentPageString !== 'undefined' && currentPageString) {
      let currentPage = JSON.parse(currentPageString);
      if (currentPage.name !== 'HomePage') this.defaultTab.push(currentPage);
    }
  }
  /**
   *
   * @param link 左侧菜单栏传过来的跳转路径
   */
  selectLink(link: string) {
    this.$router.push({ path: link }).then(() => {
      // 判断是已有当前路由记录
      let isDuplicates = ArrayMethods.isDuplicates(
        this.defaultTab,
        this.$route.name,
        false
      );
      // 没有，则添加记录
      if (!isDuplicates) {
        let result = ArrayMethods.isDuplicates(
          this.menus,
          this.$route.name,
          false
        );
        // 将跳转的菜单对象添加到tab数组中
        this.pushRoute(result);
        // 本地存储，网页刷新后仍然有当前tab项纪录
        sessionStorage.setItem('currentPage', JSON.stringify(result));
        return;
      }
      // 本地存储，网页刷新后仍然有当前tab项纪录
      sessionStorage.setItem('currentPage', JSON.stringify(isDuplicates));
    });
  }

  /**
   *
   * @param index 删除路由对象下标
   */
  removeTab(index: number) {
    // 删除当前tab
    this.defaultTab.splice(index, 1);
    // 删除当前tab，选中前一项
    this.selectTab(this.defaultTab[index - 1]);
  }

  /**
   *
   * @param item tab页对象
   */
  selectTab(item: RouterLink) {
    // 更新本地存储tab对象
    sessionStorage.setItem('currentPage', JSON.stringify(item));
    this.$router.push({ path: item.path });
  }

  /**
   *
   * @param isDuplicates 路由对象
   */
  pushRoute(isDuplicates: any) {
    this.defaultTab.push(isDuplicates);
  }

  /**
   * 返回首页大屏
   */
  backHome() {
    this.$router.push({ path: '/' });
  }
}
