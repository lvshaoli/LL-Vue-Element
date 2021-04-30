<!--
 * @Author: your name
 * @Date: 2021-04-28 09:22:20
 * @LastEditTime: 2021-04-28 09:34:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\packages\commonForm\baseForm\LLCheckboxgroup.vue
-->
<template>
  <div>
      <el-checkbox-group v-bind="$attrs" v-on="$listeners">
      <el-checkbox v-for="(label, index) in $attrs.options" :key="index" :label="label"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>