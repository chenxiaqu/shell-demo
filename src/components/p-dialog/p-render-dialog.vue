<!--
 * @Author: 庞昭昭
 * @Date: 2020-12-14 17:23:37
 * @LastEditTime: 2020-12-14 17:29:29
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\components\p-dialog\p-render-dialog.vue
 * @记得注释
-->
<script>
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class PDialog extends Vue {
  @Prop({ type: String, default: '50%' }) width; // dialog宽度
  @Prop({ type: String, default: '15vh' }) top; // dialog距离顶部长度
  @Prop({ type: String, default: '' }) title; // dialog标题
  @Prop({ type: Boolean, default: true }) showClose; // dialog显隐

  render(h) {
    return (
      <el-dialog
        title={this.title}
        visible_sync={this.showClose}
        width={this.width}
        before-close={this.handleClose}
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button on-click={(this.showClose = false)}>取 消</el-button>
          <el-button type={'primary'} on-click={(this.showClose = false)}>
            确 定
          </el-button>
        </span>
      </el-dialog>
    );
  }

  /**
   * 关闭前的回调，会暂停 Dialog 的关闭
   */
  handleClose() {
    console.log(666);
  }
}
</script>
<style lang="scss" scoped>
.p-dialog {
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  z-index: 998;
  .p-dialog-header {
    position: relative;
    padding: 20px 20px 10px;
    text-align: center;
    .p-dialog-title {
      font-size: 18px;
      color: #303133;
    }
    .p-del-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
  .p-dialog-body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .p-dialog-footer {
    padding: 0 20px 20px;
  }
}
</style>
