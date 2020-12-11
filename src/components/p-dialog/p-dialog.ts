/*
 * @Author: 庞昭昭
 * @Date: 2020-12-11 14:30:20
 * @LastEditTime: 2020-12-11 15:31:37
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\components\p-dialog\p-dialog.ts
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

  handleClose() {
    this.$emit('close');
  }
}
