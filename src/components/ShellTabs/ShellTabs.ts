import { Vue, Component, Prop } from 'vue-property-decorator';
import RouterLink from '@/model/RouterLink';

@Component({
  components: {}
})
export default class ShellTabs extends Vue {
  // 遵循RouterLink模型设计
  @Prop({ type: Array, default: [] }) defaultTab;

  entryIndex: number = -1; // 鼠标移入tab的下标
  silder_style = {}; // tab选项卡下方滑块style

  // 选中tab路由name
  get selectedName() {
    return this.$route.name;
  }

  /**
   *
   * @param item tab页对象
   */
  selectTab(item: RouterLink) {
    this.$emit('selectTab', item);
  }

  /**
   *
   * @param name 路由name，删除选中tab
   * @param index 删除路由的下标
   */
  del(index: number) {
    this.$emit('removeTab', index);
  }

  /**
   * 鼠标移入事件
   * @param index tab下标
   */
  enter(index) {
    this.entryIndex = index;
  }

  /**
   * 鼠标移出事件
   * @param index tab下标
   */
  leave(index) {
    this.entryIndex = -1;
  }
}
