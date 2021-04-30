<!--
 * @Author: your name
 * @Date: 2021-04-27 14:55:54
 * @LastEditTime: 2021-04-27 15:16:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\packages\commonForm\LLSelect.vue
-->
<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>