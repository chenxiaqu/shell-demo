import { Vue, Component, Prop } from 'vue-property-decorator';
import MenuItem from './cmp/MenuItem.vue';

@Component({
  components: { MenuItem }
})
export default class Menus extends Vue {
  @Prop({ type: Array, default: [] }) menus: any[] = [];
}
