<!--
 * @Author: your name
 * @Date: 2021-04-21 15:25:24
 * @LastEditTime: 2021-04-28 09:42:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\commonForm\commonFormItem.vue
-->
<template>
  <el-form-item
    :class="{ vertical: itemOption.vertical }"
    :label="(!itemOption.vertical && itemOption.label) || ''"
    v-bind="itemOption"
    v-on="itemOption"
  >
    <div v-if="itemOption.vertical" class="custom-title">
      {{ itemOption.label }}
    </div>
    <component
      :is="itemOption.type"
      v-model="itemOption.value"
      v-bind="itemOption.props"
      v-on="itemOption.props"
    />
  </el-form-item>
</template>

<script>
import { computeFormItem } from "./core";
import LLSelect from "./baseForm/LLSelect";
import LLRangeDate from "./baseForm/LLRangeDate";
import LLCheckboxGroup from "./baseForm/LLCheckboxGroup";
import LLRadioGroup from "./baseForm/LLRadioGroup";
export default {
  components: { LLSelect, LLRangeDate, LLCheckboxGroup, LLRadioGroup },
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    itemOption() {
      return computeFormItem(this.option);
    },
  },
};
</script>

<style lang="less" scoped>
.custom-title {
  white-space: nowrap;
}
.vertical {
  margin-bottom: 0px !important;
}
</style>
