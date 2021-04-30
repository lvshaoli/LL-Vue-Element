
# LLCommonElement

### 基于element ui 2.0 组合一些常用的组件方便使用  
### 支持所有原生element ui属性

***
 #### 使用方法
 * npm install lsl-element / yarn add lsl-element
* import LLElement from "lsl-element";
* vue.use(LLElement);
***

### table
```
 <LL-Commontable
        border
        stripe
        :data="data"
        height="580"
        :column="column"
        pagination
        v-loading="loading"
        :total="page.total"
        :page="page.currentPage"
        :limit="page.limit"
        @pagination="paginationChange"
      ></LL-Commontable>



      data() {
          return {
              
      column: [
        {
          label: "模块名称",
          align: "center",
          prop: "name",
        },
        {
          label: "模块说明",
          align: "center",
          prop: "desc",
        "show-overflow-tooltip": true,
        width: 400,
        },
        {
          label: "模块参数",
          align: "center",
          prop: "params",
          render: (h, scope) => {
            return <el-tag>{scope.row.address}</el-tag>;
          }
        },
      ],
          }
      }

```

### form


```
<template>
<div class="form-container">
  <LL-Commmonform ref="myform" :formOptions="createFormOption" />
  <el-button type="primary" @click="submitForm('myform')">立即创建</el-button>
</div>
</template>

<script>
export default {
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
              console.log("失去焦点", e);
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
              console.log(e);
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

```

### dialog
```
<template>
  <div>
    <!-- <LL-CommonDialog :visible.sync="dialogVisible" type="form" :formOptions="createFormOption" /> -->

    <LL-CommonDialog title="tableDialog" :visible.sync="dialogVisible" type="table" :column="column" />
  </div>
</template>

<script>
export default {
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
          console.log(values);
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
                console.log("失去焦点", e);
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
```

### 等等其他组件