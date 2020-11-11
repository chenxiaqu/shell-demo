<template>
  <div class="flex_start_row ShellTabs">
    <div
      class="nowrap ShellTabs-single"
      v-for="(item, index) in route"
      :key="index"
      @click="selectTab(item.path)"
    >
      <!-- 当前tab名字 -->
      <span class="text_14_light ShellTabs-single-text">{{ item.name }}</span>
      <!-- 删除选中tab -->
      <i
        v-if="item.isDel"
        class="el-icon-circle-close text_12_grey"
        @click="del.stop(item.name, index)"
      ></i>
    </div>
  </div>
</template>
<script src="./ShellTabs.ts"></script>
<style lang="scss">
.ShellTabs {
  width: 100%;
  padding: 12px 24px 0 24px;
  box-sizing: border-box;
  .ShellTabs-single {
    padding: 12px;
    max-width: 120px;
    .ShellTabs-single-text {
      margin-right: 12px;
    }
  }
}
</style>
