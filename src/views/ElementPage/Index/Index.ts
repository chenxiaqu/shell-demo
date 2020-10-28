import { Vue, Component, Prop } from 'vue-property-decorator';
import ShellLayout from '@/layouts/ShellLayout/ShellLayout.vue';
import Menus from '@/components/Menus/Menus.vue';

@Component({
  components: { Menus, ShellLayout }
})
export default class ElementPageIndex extends Vue {}
