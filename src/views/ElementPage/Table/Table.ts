/*
 * @Author: 庞昭昭
 * @Date: 2020-11-11 10:08:05
 * @LastEditTime: 2020-12-11 13:57:43
 * @LastEditors: 庞昭昭
 * @Description: 表格组件展示路由
 * @FilePath: \shell-demo\src\views\ElementPage\Table\Table.ts
 * @记得注释
 */
import { Vue, Prop, Component } from 'vue-property-decorator';
import BasicsTable from '@/components/BasicsTable/BasicsTable.vue';

@Component({
  components: { BasicsTable }
})
export default class Table extends Vue {}
