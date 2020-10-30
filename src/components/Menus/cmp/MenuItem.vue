<template>
  <div class="MenuItem">
    <el-submenu v-if="menuItem.children" :index="menuItem.name">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ menuItem.title }}</span>
      </template>
      <el-menu-item-group v-for="item in menuItem.children" :key="item.name">
        <span slot="title">{{ item.title }}</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <MenuItems></MenuItems>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item v-else :index="menuItem.name">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import MenuItems from './MenuItem.vue';
@Component({
  components: { MenuItems }
})
export default class MenuItem extends Vue {
  @Prop({ type: Object, default: {} }) menuItem: any;
}
</script>
<style lang="scss"></style>
