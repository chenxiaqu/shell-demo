<template>
  <shell-layout class="Index">
    <template slot="header">
      <div class="flex_between_row header-wrapper">
        <div class="reserved">
          <img class="userInfo-img" src="@/assets/img/img/user_img.jpg" />
        </div>
        <div class="flex_center_row userInfo">
          <img class="userInfo-img" src="@/assets/img/img/user_img.jpg" />
          <div class="text_16_white userInfo-name">好多钱</div>
        </div>
      </div>
    </template>
    <template slot="main">
      <div class="main-wrapper flex_start_row_wrapper">
        <div
          class="flex_center_column module"
          v-for="item in modules"
          :key="item.id"
          @click="goLink(item)"
        >
          <img class="img_48 module-img" :src="item.img" />
          <div class="text_16_black Medium module-name">{{ item.title }}</div>
          <div class="text_14_grey module-desc">{{ item.desc }}</div>
        </div>
      </div>
    </template>
  </shell-layout>
</template>
<script lang="ts" src="./Index.ts"></script>
<style lang="scss">
.Index {
  .header-wrapper {
    padding: 0 24px;
    height: 100%;
    background-color: #1890ff;
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
  .main-wrapper {
    padding: 3vh 12vw;
    background-color: #f5f5f5;
    box-sizing: border-box;
    .module {
      position: relative;
      top: 0;
      width: calc(25% - 12px);
      height: 276px;
      padding: 40px;
      margin-bottom: 24px;
      margin-right: 12px;
      border-radius: 4px;
      background-color: #fff;
      box-sizing: border-box;
      transition: top 0.5s;
      cursor: pointer;
      .module-img {
        border-radius: 8px;
      }
      .module-name {
        margin-top: 12px;
        width: 120px;
        text-align: center;
      }
      .module-desc {
        margin-top: 20px;
        max-width: 240px;
      }
    }
    .module:hover {
      top: -10px;
      box-shadow: 0 0 5px #a8a8b6;
    }
  }
}
</style>
