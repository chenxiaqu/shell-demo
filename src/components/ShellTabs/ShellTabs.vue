<template>
  <div ref="tabWrapper" class="flex_start_row ShellTabs" id="ShellTabs">
    <i
      v-if="overWidth"
      class="el-icon-arrow-left controlMove"
      :style="{
        width: iconWidthStyle,
        height: iconWidthStyle,
        'line-height': iconWidthStyle
      }"
      @click="forward"
    ></i>
    <div class="ShellTabs-content" :style="overWidthStyle">
      <div :style="{ position: 'relative', left: moveWidth + 'px' }">
        <div
          v-for="(item, index) in defaultTab"
          :key="index"
          @click="selectTab(item)"
          @mouseenter="enter(index)"
          @mouseleave="leave(index)"
          class="nowrap ShellTabs-single"
          :class="selectedName == item.name ? 'ShellTabs-single-selected' : ''"
          :style="{ width: tabWidthStyle }"
        >
          <!-- 当前tab名字 -->
          <span
            class="ShellTabs-single-text"
            :class="
              selectedName == item.name || entryIndex == index
                ? 'text_14_blue'
                : 'text_14_light'
            "
            >{{ item.meta.title }}</span
          >
          <!-- 删除选中tab -->
          <span
            v-if="item.meta.isDel && entryIndex == index"
            class="text_14_light DelIcon"
            @click.stop="del(index)"
            >x</span
          >
          <!-- tab选项卡下方滑块 -->
          <div class="silder" :style="silder_style"></div>
        </div>
      </div>
    </div>

    <i
      v-if="overWidth"
      class="el-icon-arrow-right controlMove"
      :style="{
        width: iconWidthStyle,
        height: iconWidthStyle,
        'line-height': iconWidthStyle
      }"
      @click="backward"
    ></i>
  </div>
</template>
<script src="./ShellTabs.ts"></script>
<style lang="scss">
.ShellTabs {
  padding: 0 24px;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  overflow-x: auto;
  .controlMove {
    text-align: center;
    cursor: pointer;
  }
  .ShellTabs-content {
    overflow-x: auto;
    white-space: nowrap;
  }
  .ShellTabs-single {
    position: relative;
    display: inline-block;
    padding: 12px 6px 12px 12px;
    text-align: center;
    background-color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    .ShellTabs-single-text {
      margin-right: 12px;
    }
    .DelIcon {
      position: absolute;
      right: 4px;
    }
    .DelIcon:hover {
      color: black;
    }
  }
  .silder {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    background: #4350ff;
    transition: all 0.3s;
  }
  .ShellTabs-single-selected {
    border-bottom: 1px solid #4350ff;
  }
}
::-webkit-scrollbar {
  height: 4px;
}
</style>
