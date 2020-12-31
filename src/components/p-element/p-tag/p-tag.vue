<!--
 * @Author: 庞昭昭
 * @Date: 2020-12-16 14:55:10
 * @LastEditTime: 2020-12-16 15:10:34
 * @LastEditors: 庞昭昭
 * @Description: element tag
 * @FilePath: \shell-demo\src\components\p-element\p-tag\p-tag.vue
 * @记得注释
-->
<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
export default class PTag extends Vue {
  @Prop() text: string = ''; // 文字
  @Prop() closable: boolean = false; // 是否可关闭
  @Prop() color: string = ''; // 背景色
  @Prop() text: string = ''; // 文字
  @Prop() text: string = ''; // 文字
  @Prop() text: string = ''; // 文字
}
</script>
