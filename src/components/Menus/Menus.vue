<template>
  <div class="Menus">
    <!-- 饿了么菜单外部 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="selectLink"
      :collapse="isCollapse"
    >
      <!-- 每个菜单项 -->
      <menu-item
        v-for="item in menus"
        :menuItem="item"
        :key="item.meta.title"
      ></menu-item>
    </el-menu>
  </div>
</template>
<script src="./Menus.ts"></script>
<style lang="scss">
.Menus {
  position: relative;
  height: 100%;
  .el-menu-vertical-demo {
    height: 100%;
  }
}
</style>
