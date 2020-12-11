<!--
 * @Author: 庞昭昭
 * @Date: 2020-12-11 14:30:02
 * @LastEditTime: 2020-12-11 15:45:00
 * @LastEditors: 庞昭昭
 * @Description: dialog组件
 * @FilePath: \shell-demo\src\components\p-dialog\p-dialog.vue
 * @记得注释
-->
<template>
  <div class="p-dialog" :style="{ top: top, width: width }">
    <div class="p-dialog-header">
      <slot name="title">
        <span class="p-dialog-title">{{ title }}</span>
      </slot>
      <i
        v-if="showClose"
        @click="handleClose"
        class="p-del-icon el-icon el-icon-close"
      ></i>
    </div>
    <div class="p-dialog-body">
      <slot></slot>
    </div>
    <div class="p-dialog-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" src="./p-dialog.ts"></script>
<style lang="scss">
.p-dialog {
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  z-index: 998;
  .p-dialog-header {
    position: relative;
    padding: 20px 20px 10px;
    text-align: center;
    .p-dialog-title {
      font-size: 18px;
      color: #303133;
    }
    .p-del-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
  .p-dialog-body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .p-dialog-footer {
    padding: 0 20px 20px;
  }
}
</style>
