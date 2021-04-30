<!--
 * @Author: your name
 * @Date: 2021-04-21 10:49:51
 * @LastEditTime: 2021-04-28 11:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\commonDialog\index.vue
-->
<template>
  <div>
    <el-dialog center v-bind="$attrs" v-on="$listeners">
      <component
        v-if="!!dealType(type)"
        :is="dealType(type)"
        v-bind="$attrs"
        v-on="$listeners"
      />
      <div v-else>
        <slot name="content"></slot>
      </div>
      <span v-if="btnLen" slot="footer" class="dialog-footer">
        <el-button
          v-if="!!btnOptions.cancelClick"
          @click="btnOptions.cancelClick"
        >{{btnOptions.cancelText || '取 消'}}</el-button>
        <el-button
          v-if="!!btnOptions.confirmClick"
          :type="btnOptions.confirmType || 'primary'"
          @click="btnOptions.confirmClick"
        >{{btnOptions.confirmText || '确 定'}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CommonForm from "../commonForm/index";
import CommonTable from "../commonTable";
import TypeMap from "./typeMap";
export default {
  name: "LLCommondialog",
  components: {
    CommonForm,
    CommonTable,
  },
  props: {
    type: String, // formdialog  tabledialog
    btnOptions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    dealType(type) {
      const component = TypeMap[type] && TypeMap[type].component || '';
      return component;
    }
  },
  computed: {
    btnLen() {
      if (this.btnOptions) {
        const keys = Object.keys(this.btnOptions) || [];
        return keys.length;
      }
      return 0;
    },
  },
};
</script>
<style lang="less" scoped>
.dialog-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
