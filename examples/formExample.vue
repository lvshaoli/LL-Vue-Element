<!--
 * @Author: lvshaoli
 * @Date: 2021-04-20 15:05:40
 * @LastEditTime: 2021-04-28 13:39:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\commonForm\example.vue
-->
<template>
<div class="form-container">
  <LL-Commonform ref="myform" :formOptions="createFormOption" />
  <el-button type="primary" @click="submitForm('myform')">立即创建</el-button>
</div>
</template>

<script>
import LLCommmonform from "../packages/commonForm";
export default {
  components: {
    LLCommmonform,
  },
  data() {
    return {
      createFormOption: {
        'labelWidth': '100px',
        getForm: (values) => {
          console.log('--', values);
        },
        formOption: [
        {
          label: "工作流名称",
          type: "input",
          value: "",
          props: {
            style: {
              width: "330px",
            },
            blur: (e) => {
              console.log("*****失去焦点", e);
            },
          },
          isRequired: true,
        },
        {
          label: "工作流描述",
          type: "textarea",
          value: "",
          props: {
            rows: 5,
            style: {
              width: "330px",
            },
          },
          isRequired: true,
          rule: [{ required: true, message: "112121", trigger: "blur" }],
        },
        {
          label: "下拉选择",
          type: "select",
          value: "",
          props: {
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
            ],
            change: (e) => {
              console.log("~~~111~", e);
            },
          },
          isRequired: true,
        },
        {
          label: "日期范围选择",
          type: "dateRange",
          props: {
            start: {
              value: "2021-04-27",
              change: (e) => {
                console.log("选择时间", e);
              },
            },
            end: {
              value: "2021-04-27",
            },
          },
        },
        {
          label:"开关",
          type: "switch",
          value: true
        },
        {
          label: "多选框",
          type: "checkbox",
          value: ["线下主题活动"],
          props: {
            options: [
              "美食/餐厅线上活动",
              "地推活动",
              "线下主题活动",
              "单纯品牌曝光"
            ]
          }
        },
        {
          label: "单选框",
          type: "radio",
          value: "男",
          props: {
            options: [
              "男",
              "女"
            ]
          }
        }
      ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // 校验form
      const form = this.$refs[formName];
      form.validateForm().then(res => {
        console.log("validate", res);
      })
    }
  }
};
</script>

<style lang="less" scoped>
 .form-container {
   width: 600px;
 }
</style>