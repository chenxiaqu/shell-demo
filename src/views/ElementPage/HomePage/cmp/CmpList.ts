/*
 * @Author: 庞昭昭
 * @Date: 2020-12-15 16:07:37
 * @LastEditTime: 2020-12-15 16:24:53
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\views\ElementPage\HomePage\cmp\cmpList.ts
 * @记得注释
 */
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class CmpList extends Vue {
  links = [
    {
      links: 'http://baidu.com',
      title: 'baidu',
      bookmarked: true
    },
    {
      links: 'http://taobao.com',
      title: 'taobao',
      bookmarked: false
    }
  ];

  bookmark(link) {
    link.bookmarked = true;
  }
}
