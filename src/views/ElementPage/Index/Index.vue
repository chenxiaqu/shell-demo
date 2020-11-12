<template>
  <shell-layout class="ElementPageIndex">
    <!-- 上 -->
    <template slot="header">
      <div class="flex_between_row header-wrapper">
        <div class="reserved">
          <i class="el-icon-s-home backHome" @click="backHome"></i>
        </div>
        <div class="flex_center_row userInfo">
          <img class="userInfo-img" src="@/assets/img/img/user_img.jpg" />
          <div class="text_16_white userInfo-name">好多钱</div>
        </div>
      </div>
    </template>
    <!-- 下 -->
    <template slot="main" v-if="menus.length > 0">
      <div class="flex_center_row ElementPageIndex-content">
        <!-- 左侧菜单栏 -->
        <div class="left-menus">
          <menus @selectLink="selectLink" :menus="menus"></menus>
        </div>
        <!-- 内容区域 -->
        <div class="right">
          <!-- 动态菜单栏 -->
          <div class="tab">
            <Shell-Tabs
              @selectTab="selectTab"
              @removeTab="removeTab"
              :defaultTab="defaultTab"
              class="shell-tabs"
            ></Shell-Tabs>
          </div>
          <!-- 主要内容 -->
          <div class="content">
            <router-view />
          </div>
        </div>
      </div>
    </template>
  </shell-layout>
</template>
<script lang="ts" src="./Index.ts"></script>
<style lang="scss">
.ElementPageIndex {
  .header-wrapper {
    padding: 0 24px;
    height: 100%;
    background-color: #1890ff;
    .backHome {
      font-size: 36px;
      color: white;
      cursor: pointer;
    }
    .userInfo {
      padding: 0 12px;
      cursor: pointer;
      .userInfo-name {
        font-size: 16px;
      }
    }
    .userInfo-img {
      margin-right: 12px;
      width: 40px;
      height: 40px;
      border-radius: 8px;
    }
  }
  .ElementPageIndex-content {
    height: 100%;
    .left-menus {
      width: 188px;
      height: 100%;
    }
    .right {
      width: calc(100% - 188px);
      height: 100%;
      .shell-tabs {
        height: 64px;
      }
      .content {
        width: 100%;
        height: calc(100% - 64px);
      }
    }
  }
}
</style>
