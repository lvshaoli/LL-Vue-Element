<template>
  <div>
    <!-- <CommonDialog :visible.sync="dialogVisible" type="form" :formOptions="createFormOption" /> -->

    <CommonDialog title="tableDialog" :visible.sync="dialogVisible" type="table" :column="column" />
  </div>
</template>

<script>
import CommonDialog from "../packages/commonDialog";
export default {
  components: {
    CommonDialog,
  },
  data() {
    return {
      column: [
        { label: "日期", prop: "date", width: 100 },
        { label: "姓名", prop: "name" },
        { label: "邮编", prop: "zip" },
        {
          label: "地址",
          prop: "address",
        },
      ],
      dialogVisible: true,
      createFormOption: {
        labelWidth: "100px",
        getForm: (values) => {
          console.log("--", values);
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
                value: "",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>