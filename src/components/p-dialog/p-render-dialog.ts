/*
 * @Author: 庞昭昭
 * @Date: 2020-12-11 14:30:20
 * @LastEditTime: 2020-12-11 18:08:12
 * @LastEditors: 庞昭昭
 * @Description: render出的弹框
 * @FilePath: \shell-demo\src\components\p-dialog\p-render-dialog.ts
 * @记得注释
 */
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class PDialog extends Vue {
  @Prop({ type: String, default: '50%' }) width; // dialog宽度
  @Prop({ type: String, default: '15vh' }) top; // dialog距离顶部长度
  @Prop({ type: String, default: '' }) title; // dialog标题
  @Prop({ type: Boolean, default: true }) showClose; // dialog显隐

  // render(h) {}
}
