/*
 * @Author: 庞昭昭
 * @Date: 2021-08-09 14:13:23
 * @LastEditTime: 2021-09-03 18:33:48
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\views\WebComponents\Index.ts
 * 记得注释
 */
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Index extends Vue {
  $refs: any;

  loadingText: string = '开启loading';
  pLoadingVisible: boolean = false; // 是否开启loading
  loadingColor: string = 'red';

  /**
   * loading控制按钮
   */
  doLoading() {
    this.pLoadingVisible = !this.pLoadingVisible;
    this.loadingText = this.pLoadingVisible ? '关闭loading' : '开启loading';
  }
}
