<!--
 * @Author: 庞昭昭
 * @Date: 2021-08-09 14:13:16
 * @LastEditTime: 2021-09-03 18:35:03
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \shell-demo\src\views\WebComponents\Index.vue
 * 记得注释
-->
<template>
  <div>
    <p-loading :visible="pLoadingVisible" :color="loadingColor"></p-loading>
    <div class="cli" id="ceshi">
      <el-button type="primary" class="button siderbar" @click="doLoading">{{
        loadingText
      }}</el-button>
    </div>
  </div>
</template>
<script lang="ts" src="./Index.ts"></script>
<style lang="scss" scoped>
.cli {
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  z-index: 100000;
  .button {
    margin-bottom: 20px;
  }
}
</style>
