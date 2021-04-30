<!--
 * @Author: your name
 * @Date: 2021-04-28 09:37:44
 * @LastEditTime: 2021-04-28 09:40:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\packages\commonForm\baseForm\LLRadioGroup.vue
-->
<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners">
      <el-radio v-for="(label, index) in $attrs.options" :key="index" :label="label"></el-radio>
    </el-radio-group>
</template>

<script>
export default {

}
</script>

<style>

</style>