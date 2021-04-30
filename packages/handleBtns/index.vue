<!--
 * @Author: your name
 * @Date: 2021-04-21 09:48:50
 * @LastEditTime: 2021-04-28 11:56:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\handleBtns\index.vue
-->
<template>
  <div>
    <el-tooltip
      v-for="(option, index) in btnOptions"
      :key="index"
      class="item"
      effect="dark"
      :content="option.content"
      placement="top-start"
    >
      <el-button
        size="mini"
        :type="option.type || 'warning'"
        @click="option.click"
        :icon="option.icon || 'el-icon-monitor'"
        circle
      ></el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "LLHandlebtns",
  props: {
    btnOptions: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style></style>
