import { Vue, Component, Prop } from 'vue-property-decorator';
import RouterLink from '@/model/RouterLink';

@Component({
  components: {}
})
export default class ShellTabs extends Vue {
  // 遵循RouterLink模型设计
  @Prop({ type: Array, default: [] }) defaultTab;
  // 选项卡宽度
  @Prop({ type: Number, default: 120 }) tabWidth;
  // 左右移动图标大小
  @Prop({ type: Number, default: 30 }) iconSize;

  entryIndex: number = -1; // 鼠标移入tab的下标
  silder_style = {}; // tab选项卡下方滑块style
  overallWidth: number = 0;
  moveWidth: number = 0; // 当tab选项总长度超出指定长度时，左右箭头控制移动的距离

  mounted() {
    // 获取tabWrapper区域宽度
    this.overallWidth = Number(
      (this.$refs.tabWrapper as HTMLElement).offsetWidth - 48
    );
  }

  // 选中tab路由name
  get selectedName() {
    return this.$route.name;
  }

  // 选项卡总长度是否超出
  get overWidth() {
    return this.tabWidth * this.defaultTab.length > this.overallWidth;
  }

  // 选项卡宽度
  get tabWidthStyle() {
    return this.tabWidth + 'px';
  }

  // 左右移动角标大小
  get iconWidthStyle() {
    return this.iconSize + 'px';
  }

  // 动态设置选项卡可见区域宽度
  get overWidthStyle() {
    if (this.overWidth) return `width:calc(100% - ${2 * this.iconSize}px)`;
    return '';
  }

  /**
   * 向后移动tab，每点击一下，移动this.tabWidth
   */
  backward() {
    // 如果可移动长度不足一个选项卡长度，则直接赋值可移动最大距离。
    if (
      this.tabWidth * this.defaultTab.length -
        (-this.moveWidth + this.overallWidth) <
      this.tabWidth
    ) {
      this.moveWidth =
        this.overallWidth - this.tabWidth * this.defaultTab.length - 60;
    } else {
      this.moveWidth = this.moveWidth - this.tabWidth;
    }
  }

  /**
   *  向前移动tab，每点击一下，left加this.tabWidth
   */
  forward() {
    // 如果大于0了，说明已经移动到第一个选项卡了，所以直接为0.
    if (this.moveWidth + this.tabWidth > 0) {
      this.moveWidth = 0;
    } else {
      this.moveWidth = this.moveWidth + this.tabWidth;
    }
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
