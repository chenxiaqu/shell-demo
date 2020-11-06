<template>
  <div class="Menus">
    <!-- 饿了么菜单外部 -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <!-- 每个菜单项 -->
      <menu-item
        v-for="item in menus"
        :menuItem="item"
        :key="item.title"
      ></menu-item>
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
