### 安装使用
- yarn add lsl-element / npm install lsl-element --save
### 全局使用
- import LLElement from "lsl-element";
- import "lsl-element/lib/lsl-element.css";  (如果不使用编辑器工具可以不导入)
- vue.use(LLElement);

### LLCommonTable使用

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

    // 在data中进行表格相关的配置，支持所有原生element属性
   data() {
    return {
      column: [
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
          },
        },
      ],
    };
  },

```
#### commonTableApi
|props|desc|功能|
|-|-|-|
|column|表格所需的字段和和属性，属性支持elementui table所有属性|可通过render自定义行列组件|
|pagination|是否需要分页|@pagination分页改变时回调|

||
|-|
|其他属性和elementui一致|


### LLCommonForm
```
html
 <LL-Commmonform ref="myform" :formOptions="createFormOption" />
  <el-button type="primary" @click="submitForm('myform')">立即创建</el-button>
```
```
配置
createFormOption: {
        'labelWidth': '100px',
        getForm: (values) => {
          console.log('获取form元素的值', values);
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
```

```
form校验
    submitForm(formName) {
      // 校验form
      const form = this.$refs[formName];
      form.validateForm().then(res => {
        console.log("validate", res);
      })
    }

```
#### commomformApi
|props|desc||
|-|-|-|
|labelWidth|表单域标签的宽度|同elementui form label-width|
|getForm|获取表单所有值集合|返回一组{lable:value}|
|props|需要传给控件的属性|具体可参考上面示例|
表单支持类型
|type|desc|prop|
|-|-|-|
|input|输入框|同elementui input|
|textarea||同elementui textarea|
|select|下拉选择||
|datePicker|日期选择||
|dateRange|日期范围选择||
|switch|开关||
|checkbox|多选框||
|radio|单选框||

### LLCommonDialog
##### 示例
```
 <!-- <LL-CommonDialog :visible.sync="dialogVisible" type="form" :formOptions="createFormOption" /> -->

    <LL-CommonDialog title="tableDialog" :visible.sync="dialogVisible" type="table" :column="column" />
```
```
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
]
}
```
### commonDialogApi
##### 目前封装弹框只有镶嵌form和table两种，其他情况 直接使用 <slot name="content"/>
|type|desc||
|-|-|-|
|form|支持commonform所有配置和属性|需申明type="form"|
|table|支持commontable所有配置和属性|需申明type="table"|
|其他情况|slot name="content"|例如div slot="content"|
### LLCommonPage
- 封装了一些固定页面样式，方便统一书写页面
```
示例
<LL-CommonPage>
<div slot="Breadcrumb">
  Breadcrumb/面包屑
</div>

 <div slot="content">
  内容区域
 </div>
</LL-CommonPage>
```

### LLHandlebtns
#### 方便表格操作栏按钮书写
```
<HandleBtns btnOptions={options} />

options = [
{
  content: "编辑",
  icon: "el-icon-edit",
  type: "info",
  click: () => {}
}
]
```
|prop|desc||
|-|-|-|
|btnOptions|所有按钮对象数组|Array|
|content|功能描述|鼠标放上去显示的文字|
|icon|element ui icon|目前只支持了element ui的icon|
|type|element ui button type|infor,default,success,warning等|
|click|点击了图标回调||


### markdown编辑器
使用
```
<LLMarkeditor style="width: 100%;" />
```
markdown编辑器是参考集成[mavon-editor](https://www.npmjs.com/package/mavon-editor)，感谢作者，使用方法

### 还有部分组件文档后续在写