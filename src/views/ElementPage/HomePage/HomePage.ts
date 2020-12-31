/*
 * @Author: 庞昭昭
 * @Date: 2020-12-15 16:07:37
 * @LastEditTime: 2020-12-16 14:30:51
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\views\ElementPage\HomePage\HomePage.ts
 * @记得注释
 */
import { Vue, Component } from 'vue-property-decorator';
import CmpList from './cmp/CmpList.vue';
import PInput from '@/components/input/p-input.vue';
@Component({
  components: { CmpList, PInput }
})
export default class HomePage extends Vue {
  tags = ['Testing', 'Design'];

  mounted() {
    console.log('111');
  }
}
