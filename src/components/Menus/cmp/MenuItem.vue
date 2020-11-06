<template>
  <!-- 菜单项细分 -->
  <div class="MenuItem">
    <!-- 如果菜单项下面还有子菜单 -->
    <el-submenu v-if="menuItem.children.length > 0" :index="menuItem.title">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ menuItem.title }}</span>
      </template>
      <el-menu-item-group v-for="item in menuItem.children" :key="item.title">
        <div v-if="item.children.length > 0">
          <menu-items
            v-for="child in item.children"
            :menuItem="child"
            :key="child.name"
          ></menu-items>
        </div>
        <el-menu-item v-else :index="menuItem.name">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ menuItem.title }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <!-- 菜单项下面没有有子菜单 -->
    <el-menu-item v-else :index="menuItem.name">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ menuItem.title }}</span>
    </el-menu-item>
  </div>
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
