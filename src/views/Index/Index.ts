import ShellLayout from '@/layouts/ShellLayout/ShellLayout.vue';
import { Component, Vue } from 'vue-property-decorator';
import Modules from '@/model/Basics/modules.ts';

@Component({
  components: { ShellLayout }
})
export default class Index extends Vue {
  // img: string = require('@/assest/img/img/user_img.jpg');
  get modules(): Modules[] {
    return [
      {
        id: '1',
        title: '第一个模块',
        img: '@/assest/img/img/user_img.jpg',
        desc: '这是第一个模块呀'
      },
      {
        id: '2',
        title: '第二个模块',
        img: '@/assest/img/img/user_img.jpg',
        desc: '这是第二个模块呀'
      },
      {
        id: '3',
        title: '第三个模块',
        img: '@/assest/img/img/user_img.jpg',
        desc: '这是第三个模块呀'
      },
      {
        id: '4',
        title: '第四个模块',
        img: '@/assest/img/img/user_img.jpg',
        desc: '这是第四个模块呀'
      },
      {
        id: '5',
        title: '第五个模块',
        img: '@/assest/img/img/user_img.jpg',
        desc: '这是第五个模块呀'
      },
      {
        id: '6',
        title: '第六个模块',
        img: '@/assest/img/img/user_img.jpg',
        desc: '这是第六个模块呀'
      }
    ];
  }
}
