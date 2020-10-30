<template>
  <div class="flex_start_row ShellTabs">
    <div class="nowrap ShellTabs-single" @click="selectTab(item.name)">
      <span class="text_14_light ShellTabs-single-text">JJ</span>
      <i class="el-icon-circle-close text_12_grey" @click="del"></i>
    </div>
    <div class="nowrap ShellTabs-single" @click="selectTab(item.name)">
      <span class="text_14_light ShellTabs-single-text">JJ</span>
      <i class="el-icon-circle-close text_12_grey" @click="del"></i>
    </div>
    <div class="nowrap ShellTabs-single" @click="selectTab(item.name)">
      <span class="text_14_light ShellTabs-single-text">JJ</span>
      <i class="el-icon-circle-close text_12_grey" @click="del"></i>
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
