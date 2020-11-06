import { Vue, Component, Prop } from 'vue-property-decorator';
import MenuItem from './cmp/MenuItem.vue';

@Component({
  components: { MenuItem }
})
export default class Menus extends Vue {
  @Prop({ type: Array, default: [] }) menus;

  isCollapse: boolean = false; // 菜单栏是否收起

  /**
   * 菜单栏伸展
   */
  handleOpen() {
    this.isCollapse = false;
  }

  /**
   * 菜单栏收起
   */
  handleClose() {
    this.isCollapse = true;
  }
}
