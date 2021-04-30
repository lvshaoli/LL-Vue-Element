<!--
 * @Author: your name
 * @Date: 2021-04-28 10:02:56
 * @LastEditTime: 2021-04-28 10:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\examples\tableExample.vue
-->
<template>
  <common-table border stripe :data="data" :column="column"></common-table>
</template>

<script>
import CommonTable from "../packages/commonTable";
export default {
  components: {
    CommonTable,
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
          render: (h, scope) => {
            return <el-tag>{scope.row.address}</el-tag>;
          },
        },
        {
          label: "组件",
          prop: "cmp",
          component: EditBtn,
          listeners: {
            "row-edit"(row) {
              console.log("row-edit", row);
            },
          },
        },
      ],
    };
  },
};
</script>

<style></style>
