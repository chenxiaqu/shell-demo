import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Menus extends Vue {
  @Prop({ type: Array, default: [] }) Menus: any[] = [];
}
