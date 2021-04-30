<!--
 * @Author: your name
 * @Date: 2021-04-27 11:58:12
 * @LastEditTime: 2021-04-28 08:58:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\examples\App.vue
-->
<template>
  <div id="app">
    <FormExample />
    <!-- <dialog-example /> -->
  </div>
</template>

<script>
import FormExample from "./formExample";
import DialogExample from "./dialogExample";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    FormExample,
    DialogExample
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
