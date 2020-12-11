<!--
 * @Author: 庞昭昭
 * @Date: 2020-11-11 10:08:05
 * @LastEditTime: 2020-12-11 15:52:30
 * @LastEditors: 庞昭昭
 * @Description: dialog弹框组件展示
 * @FilePath: \shell-demo\src\views\ElementPage\Dialog\Dialog.vue
 * @记得注释
-->
<template>
  <div class="Dialog">
    <el-button @click="openDialog">唤出dialog</el-button>
    <p-dialog
      v-show="showDialog"
      width="30%"
      top="30%"
      :title="title"
      @close="closeDialog"
    >
      <div>提示内容</div>
      <div slot="footer" class="Dialog-footer">
        <el-button>取消</el-button>
        <el-button type="primary">提交</el-button>
      </div>
    </p-dialog>
  </div>
</template>
<script src="./Dialog.ts"></script>
<style lang="scss">
.Dialog {
  width: 100%;
  height: 100%;
  .Dialog-footer {
    @include flex();
  }
}
</style>
