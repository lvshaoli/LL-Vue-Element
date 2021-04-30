<!--
 * @Author: your name
 * @Date: 2021-04-27 15:27:03
 * @LastEditTime: 2021-04-28 09:09:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\packages\commonForm\baseForm\LLRangeDate.vue
-->
<template>
  <div class="range-date">
    <el-col :span="11">
      <component
        :is="'el-date-picker'"
        v-model="start.value"
        v-bind="start"
        v-on="start"
        placeholder="请选择"
      />
    </el-col>
    <el-col :span="2"><div class="line"></div></el-col>
    <el-col :span="11">
      <component
        :is="'el-date-picker'"
        v-model="end.value"
        v-bind="end"
        v-on="end"
        placeholder="请选择"
      />
    </el-col>
  </div>
</template>

<script>
import eventObsever from "../../utils/Observer";
export default {
  props: {
    start: {
      type: Object,
      default: () => {},
    },
    end: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    start: {
      deep: true,
      handler: (newVal) => {
        eventObsever.$emit("LLRangeDate", {
          key: "start",
          value: newVal.value,
        });
      },
    },
    end: {
      deep: true,
      handler: (newVal) => {
        eventObsever.$emit("LLRangeDate", { key: "end", value: newVal.value });
      },
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.range-date {
  position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

  .line {
    width: 25px;
    background-color: rgba(0, 0, 0, 0.3);
    height: 2px;
  }
}
</style>
