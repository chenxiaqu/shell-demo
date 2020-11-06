import { CardSlots } from 'element-ui/types/card';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class ShellTabs extends Vue {
  /**
   *
   * @param name 路由name
   */
  selectTab(name: string) {
    this.$router.push({ name: name });
  }

  /**
   * 删除选中tab
   */
  del() {
    console.log(666);
  }
}
