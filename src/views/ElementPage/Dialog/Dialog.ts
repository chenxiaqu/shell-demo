/*
 * @Author: 庞昭昭
 * @Date: 2020-11-11 10:08:05
 * @LastEditTime: 2020-12-11 15:41:09
 * @LastEditors: 庞昭昭
 * @Description: dialog组件展示路由
 * @FilePath: \shell-demo\src\views\ElementPage\Dialog\Dialog.ts
 * @记得注释
 */
import { Vue, Prop, Component } from 'vue-property-decorator';
import PDialog from '@/components/p-dialog/p-dialog.vue';

@Component({
  components: { PDialog }
})
export default class Table extends Vue {
  showDialog: boolean = false; // dialog显隐
  title: string = ''; // 弹框标题
  /**
   * 打开dialog
   */
  openDialog(title = '提示') {
    this.title = '提示';
    this.showDialog = true;
  }

  /**
   * 关闭dialog
   */
  closeDialog() {
    this.showDialog = false;
  }
}
