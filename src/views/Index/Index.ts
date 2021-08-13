import ShellLayout from '@/layouts/ShellLayout/ShellLayout.vue';
import Modules from '@/model/Basics/Modules';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { ShellLayout }
})
export default class Index extends Vue {
  img: string = require('@/assets/img/img/user_img.jpg');
  get modules(): Modules[] {
    return [
      {
        id: '1',
        title: '组件开发',
        img: this.img,
        desc: '以组件开发为始，在之后的项目模块中，更多的应用，逐渐完善。',
        name: 'ElementPage'
      },
      {
        id: '2',
        title: '微应用-vue',
        img: this.img,
        desc: '这是vue模块啊',
        name: 'micro-vue'
      },
      {
        id: '3',
        title: '第三个模块',
        img: this.img,
        desc: '这是第三个模块呀',
        name: 'web-components'
      },
      {
        id: '4',
        title: '第四个模块',
        img: this.img,
        desc: '这是第四个模块呀',
        name: 'ElementPage'
      },
      {
        id: '5',
        title: '第五个模块',
        img: this.img,
        desc: '这是第五个模块呀',
        name: 'ElementPage'
      },
      {
        id: '6',
        title: '第六个模块',
        img: this.img,
        desc: '这是第六个模块呀',
        name: 'ElementPage'
      }
    ];
  }

  goLink(item: Modules) {
    this.$router.push({ name: item.name, query: { id: item.id } });
  }
}
