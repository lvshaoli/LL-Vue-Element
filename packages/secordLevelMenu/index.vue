<!--
 * @Author: your name
 * @Date: 2021-04-25 11:06:27
 * @LastEditTime: 2021-04-28 11:56:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\secordLevelMenu\index.vue
-->
<template>
  <div class="data_manage clear">
    <div class="sub_menu fl">
      <p class="title">{{ title }}</p>
      <el-menu
        :default-active="$route.path"
        :router="true"
        mode="vertical"
        class="system_menu"
        text-color="#333333"
        active-text-color="#34c3ec"
      >
      <template v-for="(label, index) in dealData(menuItems)">
        <el-menu-item
          :index="menuItems[label]"
          :key="index"
          >{{ label }}</el-menu-item>
      </template>
      </el-menu>
    </div>
    <div class="manage_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "LLSecordlevelmenu",
  props: {
    title: String,
    menuItems: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    dealData(menuItems) {
      let keys = [];
      try {
        keys = Object.keys(menuItems) || [];
      } catch (e) {}
      return keys;
    },
  },
};
</script>
<style lang="less" scoped>
.data_manage {
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  background: #e9ecf0;
}

.manage_content {
  position: absolute;
  left: 150px;
  right: 0;
  top: 0;
  bottom: 0px;
  padding: 12px 12px 0;
  box-sizing: border-box;
  background: #e9ecf1;
}

.sub_menu {
  width: 150px;
  height: 100%;
  .title {
    color: #8a8a8a;
    background: #fff;
    line-height: 20px;
    padding: 15px 0 7px 18px;
    border-bottom: 1px solid #ececec;
  }
  .system_menu {
    width: 100%;
    height: 100%;

    .el-menu-item {
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      color: #686868;
    }
    /deep/ .el-menu-item.is-active {
      color: #108cee !important;
      background: #f6f7fb;
      border-left: 2px solid #408ae7 !important;
    }
  }
}
</style>
