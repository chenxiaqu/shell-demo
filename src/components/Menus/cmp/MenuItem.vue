<template>
  <!-- 如果菜单项下面还有子菜单 -->
  <el-submenu v-if="menuItem.children.length > 0" :index="menuItem.meta.title">
    <!-- 菜单栏name -->
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{ menuItem.meta.title }}</span>
    </template>
    <!-- 循环遍历子菜单 -->
    <div v-for="item in menuItem.children" :key="item.meta.title">
      <!-- 若子菜单下仍有下级菜单,递归调用该组件 -->
      <el-submenu v-if="item.children.length > 0" :index="item.meta.title">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <menu-items
          v-for="child in item.children"
          :menuItem="child"
          :key="child.title"
        ></menu-items>
      </el-submenu>
      <!-- 若没有,则为可跳转菜单项 -->
      <el-menu-item v-else :index="menuItem.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ menuItem.meta.title }}</span>
      </el-menu-item>
    </div>
  </el-submenu>
  <!-- 若没有,则为可跳转菜单项 -->
  <el-menu-item v-else :index="menuItem.path">
    <i class="el-icon-menu"></i>
    <span slot="title">{{ menuItem.meta.title }}</span>
  </el-menu-item>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import MenuItems from './MenuItem.vue';
@Component({
  name: 'MenuItems',
  components: { MenuItems }
})
export default class MenuItem extends Vue {
  @Prop({ type: Object, default: {} }) menuItem: any;
}
</script>
<style lang="scss"></style>
