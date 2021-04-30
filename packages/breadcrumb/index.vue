<!--
 * @Author: your name
 * @Date: 2021-04-19 11:33:27
 * @LastEditTime: 2021-04-28 11:48:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\breadcrumb\index.vue
-->
<template>
   <div class="bread_item">
         <slot></slot>
    </div>
</template>

<script>
export default {
  name: "LLBreadcrumb"
}
</script>

<style lang="less" scoped>
  .bread_item {
    color: #8a8a8a;
    line-height: 20px;
    padding-bottom: 11px;
    background: #e9ecf1;
  }
</style>