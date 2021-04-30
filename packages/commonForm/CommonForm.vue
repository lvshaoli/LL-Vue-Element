<!--
 * @Author: lvshaoli
 * @Date: 2021-04-20 14:43:18
 * @LastEditTime: 2021-04-28 11:55:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\commonForm\CommonForm.vue
-->
<template>
  <div class="common-form">
    <el-form
      ref="form"
      :model="form"
      :label-width="formOptions.labelWidth || '85px'"
      v-bind="$attrs"
      v-on="$listeners"
      v-if="!horizontal"
    >
      <template v-for="(option, key) in formOptions.formOption">
        <CommonFormItem :option="option" :key="key" />
      </template>
    </el-form>

    <el-form
      ref="form"
      :model="form"
      :label-width="labelWidth || '85px'"
      v-bind="$attrs"
      v-on="$listeners"
      v-if="horizontal"
    >
      <template v-for="(option, key) in dealToGroup(formOptions.formOption)">
        <el-row :key="key">
          <el-col
            :span="24 / rowNum"
            v-for="(item, index) in option"
            :key="index"
          >
            <CommonFormItem :option="item" :prop="item.label" />
          </el-col>
        </el-row>
      </template>
      
    </el-form>
  </div>
</template>

<script>
import CommonFormItem from "./commonFormItem";
import eventObsever from "../utils/Observer";
export default {
  name: "LLCommonform",
  components: {
    CommonFormItem,
  },
  props: {
    horizontal: {
      // 是否水平布局
      type: Boolean,
      default: false,
    },
    rowNum: {
      type: Number,
      default: 2,
    },
    formOptions: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    eventObsever.$on("LLRangeDate", (val) => {
      this.dealValues(this.formOptions.formOption);
    });
  },
  data() {
    return {
      // form: {},
      notValidElement: ["LLRangeDate", "el-switch", "LLCheckboxGroup", "LLRadioGroup"], // 不需要校验的元素
    };
  },
  computed: {
    form() {
      return this.dealValues(this.formOptions.formOption);
    },
  },
  methods: {
    dealValues(options) {
      const formValues_ = {};
      const formValues = {};
      options &&
        options.forEach((item) => {
          const { label, value } = item || {};
          const label_ = label + "_";
          if (item.type == "LLRangeDate") {
            const { props } = item || {};
            const { start, end } = props || {};
            // formValues_[label_] = start.value || end.value;
            formValues[label] = {
              start: start.value,
              end: end.value,
            };
          } else {
            if (this.notValidElement.indexOf(item.type) < 0) {
              formValues_[label_] = value;
            }
            formValues[label] = value;
          }
        });
      const { getForm } = this.formOptions || {};
      getForm && getForm(formValues);
      return formValues_;
    },
    // 分组，方便布局
    dealToGroup(formOptions) {
      if (!this.horizontal) {
        return formOptions;
      }
      const newOptions = [];
      let temp = [];
      formOptions &&
        formOptions.forEach((option, index) => {
          temp.push(option);
          if (!((index + 1) % this.rowNum) || formOptions.length <= index + 1) {
            newOptions.push(temp);
            temp = [];
          }
        });
      return newOptions;
    },

    validateForm(formName) {
      return new Promise((resolve) => {
          this.$refs[formName || 'form'].validate((valid) => {
          resolve(valid);
        });
      })
    },
  },
};
</script>

<style lang="less" scoped>
.common-form {
  width: 100%;
}
.line {
  display: flex;
  text-align: center;
}
</style>
