<!--
 * @Author: your name
 * @Date: 2021-04-27 11:58:12
 * @LastEditTime: 2021-05-07 09:14:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\examples\App.vue
-->
<template>
  <div id="app">
    <!-- <FormExample /> -->
    <!-- <dialog-example /> -->
    <Markeditor />
  </div>
</template>

<script>
// import FormExample from "./formExample";
// import DialogExample from "./dialogExample";
import Markeditor from "./markeditor";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
    // FormExample,
    // DialogExample,
    Markeditor
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
