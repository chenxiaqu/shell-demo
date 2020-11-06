import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';
import ShellLayout from '@/layouts/ShellLayout/ShellLayout.vue';
import Menus from '@/components/Menus/Menus.vue';
import ShellTabs from '@/components/ShellTabs/ShellTabs.vue';

@Component({
  components: { Menus, ShellLayout, ShellTabs }
})
export default class ElementPageIndex extends Vue {
  @State('menus') menus;
  @Mutation('setMenus') setMenus;

  backHome() {
    this.$router.push({ name: 'Home' });
  }

  mounted() {
    let menus = [
      {
        name: 'BasicsTable',
        title: '基础表格',
        children: []
      },
      {
        name: 'BasicsTable',
        title: '基础表格2',
        children: [
          {
            name: 'BasicsTable',
            title: '基础表格2-1',
            children: [
              {
                name: 'BasicsTable',
                title: '基础表格2-1-1',
                children: []
              }
            ]
          },
          {
            name: 'BasicsTable',
            title: '基础表格2-2',
            children: []
          }
        ]
      }
    ];
    this.setMenus(menus);
  }
}
