import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class ShellTabs extends Vue {
  @Prop({ type: Array, default: [] }) route;

  /**
   *
   * @param path 路由path，添加路由数据
   */
  selectTab(path: string) {
    this.$emit('selectTab', path);
  }

  /**
   *
   * @param name 路由name，删除选中tab
   * @param index 删除路由的下标
   */
  del(name: string, index: number) {
    this.$emit('removeRoute', name, index);
  }
}
