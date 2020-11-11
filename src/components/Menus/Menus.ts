import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import MenuItem from './cmp/MenuItem.vue';

@Component({
  components: { MenuItem }
})
export default class Menus extends Vue {
  @Prop({ type: Array, default: [] }) menus;

  isCollapse: boolean = false; // 菜单栏是否收起

  /**
   *
   * @param link 选中的菜单path
   */
  selectLink(link: string) {
    this.$emit('selectLink', link);
  }

  /**
   *
   * 控制菜单栏
   */
  control() {
    this.isCollapse = !this.isCollapse;
  }

  /**
   * 伸展菜单项
   */
  handleOpen(key, path) {
    console.log(key, path);
  }

  /**
   * 关闭菜单项
   */
  handleClose(key, path) {
    console.log(key, path);
  }
}
