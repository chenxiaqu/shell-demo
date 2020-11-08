import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';
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

  backHome() {
    this.$router.push({ path: '/' });
  }

  mounted() {
    let menus: RouterLink[] = [
      {
        path: '/ElementPage/Table',
        name: 'Table',
        title: '表格',
        children: []
      },
      {
        path: '/ElementPage/Dialog',
        name: 'Dialog',
        title: '对话框',
        children: []
      }
    ];
    this.setMenus(menus);
  }
}
