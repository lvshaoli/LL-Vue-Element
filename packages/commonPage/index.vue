<!--
 * @Author: your name
 * @Date: 2021-04-12 13:56:41
 * @LastEditTime: 2021-04-28 11:55:44
 * @LastEditors: Please set LastEditors
 * @Description: 页面公共样式的封装
 * @FilePath: \openlayersproj\src\control\admin\systemManage\dataFileArchive.vue
-->
<template>
  <div class="data-file">
    <slot name="Breadcrumb"></slot>
    <div class="data-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LLCommonpage",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.data-file {
  border-radius: 8px;
  .data-content {
    background-color: white;
    height: 90vh;
    padding: 12px;
  }
}
</style>
