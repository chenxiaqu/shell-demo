<template>
  <shell-layout class="ElementPageIndex">
    <template slot="header">
      <div class="flex_between_row header-wrapper">
        <div class="reserved">
          <img class="userInfo-img" src="@/assets/img/img/user_img.jpg" />
        </div>
        <div class="flex_center_row userInfo">
          <img class="userInfo-img" src="@/assets/img/img/user_img.jpg" />
          <div class="userInfo-name">庞昭昭</div>
        </div>
      </div>
    </template>
    <template slot="main">
      <div class="flex_center_row ElementPageIndex-content">
        <div class="left-menus">
          <Menus></Menus>
        </div>
        <div class="content"></div>
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
      width: 128px;
      height: 100%;
    }
    .content {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
