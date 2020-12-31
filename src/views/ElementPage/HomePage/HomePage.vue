<!--
 * @Author: 庞昭昭
 * @Date: 2020-11-11 17:08:52
 * @LastEditTime: 2020-12-16 15:00:05
 * @LastEditors: 庞昭昭
 * @Description: 首页随便展示一些东西
 * @FilePath: \shell-demo\src\views\ElementPage\HomePage\HomePage.vue
 * @记得注释
-->
<template>
  <div class="HomePage">
    <h2>element相关组件</h2>
    <h3>tag标签</h3>
    <div class="p-tag">
      <p-tag></p-tag>
    </div>

    <!-- <h1>函数式组件</h1> -->
    <!-- 作用域插槽数组 -->
    <!-- <cmp-list>
      <div
        slot="link"
        slot-scope="{ link, bookmarkButtonAttrs, bookmarkButtonEvents }"
      >
        <i v-show="link.bookmarked" class="el-icon-s-promotion"></i>
        <a :href="link.href">{{ link.title }}</a>
        <el-button v-bind="bookmarkButtonAttrs" v-on="bookmarkButtonEvents"
          >Bookmark</el-button
        >
      </div>
    </cmp-list> -->
  </div>
</template>
<script src="./HomePage.ts"></script>
<style lang="scss">
.HomePage {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
