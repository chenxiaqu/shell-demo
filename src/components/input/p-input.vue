<!--
 * @Author: 庞昭昭
 * @Date: 2020-12-16 14:23:41
 * @LastEditTime: 2020-12-16 14:32:15
 * @LastEditors: 庞昭昭
 * @Description: p-input-tag-render包裹容器
 * @FilePath: \shell-demo\src\components\input\p-input.vue
 * @记得注释
-->
<template>
  <!-- inputTag函数组件 -->
  <p-input-tag v-model="value">
    <div
      slot-scope="{ tags, removeTag, inputAttrs, inputEvent }"
      class="tags-input"
    >
      <span class="tags-input-tag">
        <span v-for="tag in tags" :key="tag">
          {{ tag }}
          <button
            type="button"
            class="tags-input-remove"
            @click="removeTag(tag)"
          >
            &times;
          </button>
        </span>
      </span>
      <input
        class="tags-input-text"
        placeholder="Add tag..."
        v-bind="inputAttrs"
        v-on="inputEvent"
      />
    </div>
  </p-input-tag>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PInputTag from '@/components/input/p-input-tag-render.vue';
@Component({
  components: { PInputTag }
})
export default class PInput extends Vue {
  @Prop()
  value: Array<string> = [];
}
</script>
