<!--
 * @Author: 庞昭昭
 * @Date: 2020-10-21 11:28:22
 * @LastEditTime: 2021-08-09 09:50:53
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\App.vue
 * @记得注释
-->
<template>
  <div id="app">
    <router-view v-show="$route.name" />
    <div id="container"></div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #f5f5f5;
}
</style>
