<template>
  <div class="Menus">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <Menu-item :menuItem="menus"></Menu-item>
    </el-menu>
  </div>
</template>
<script src="./Menus.ts"></script>
<style lang="scss">
.Menus {
  height: 100%;
  .el-menu-vertical-demo {
    height: 100%;
  }
}
</style>
