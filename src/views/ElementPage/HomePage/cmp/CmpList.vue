<!--
 * @Author: 庞昭昭
 * @Date: 2020-12-15 16:06:09
 * @LastEditTime: 2020-12-16 14:08:51
 * @LastEditors: 庞昭昭
 * @Description: 列表
 * @FilePath: \shell-demo\src\views\ElementPage\HomePage\cmp\cmpList.vue
 * @记得注释
-->
<template>
  <div>
    <li v-for="link in links" :key="link.title" class="flex_start_row">
      <slot
        name="link"
        :link="link"
        :bookmark="bookmark"
        :bookmarkButtonAttrs="{
          style: [link.bookmarked ? { display: 'none' } : '']
        }"
        :bookmarkButtonEvents="{
          click: () => {
            bookmark(link);
          }
        }"
      ></slot>
    </li>
  </div>
</template>
<script lang="ts" src="./CmpList.ts"></script>
