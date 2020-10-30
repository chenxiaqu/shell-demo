import { Vue, Component, Prop } from 'vue-property-decorator';
import ShellLayout from '@/layouts/ShellLayout/ShellLayout.vue';
import Menus from '@/components/Menus/Menus.vue';
import ShellTabs from '@/components/ShellTabs/ShellTabs.vue';

@Component({
  components: { Menus, ShellLayout, ShellTabs }
})
export default class ElementPageIndex extends Vue {
  get menus() {
    return [
      {
        name: 'BasicsTable'
      },
      [
        {
          name: 'BasicsTable'
        },
        {
          name: 'BasicsTable'
        }
      ]
    ];
  }
  backHome() {
    this.$router.push({ name: 'Home' });
  }
}
