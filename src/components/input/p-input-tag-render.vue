<!--
 * @Author: 庞昭昭
 * @Date: 2020-12-15 17:18:23
 * @LastEditTime: 2020-12-16 13:42:50
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\components\input\p-input-tag.vue
 * @记得注释
-->
<script>
export default {
  props: ['value'],
  data() {
    return {
      newTag: ''
    };
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.value,
      removeTag: this.removeTag,
      inputAttrs: {
        value: this.newTag
      },
      inputEvent: {
        input: e => {
          this.newTag = e.target.value;
        },
        keydown: e => {
          console.log(e);
          if (e.keyCode === 13) {
            e.preventDefault();
            this.addTag();
          }
        }
      }
    });
  },
  methods: {
    // 删除标签
    removeTag(tag) {
      this.$emit(
        'input',
        this.value.filter(t => t !== tag)
      );
    },
    // 添加标签
    addTag() {
      if (
        this.newTag.trim().length === 0 ||
        this.value.includes(this.newTag.trim())
      ) {
        return;
      }
      this.$emit('input', [...this.value, this.newTag.trim()]);
    }
  }
};
</script>
