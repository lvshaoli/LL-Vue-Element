/*
 * @Author: your name
 * @Date: 2021-04-27 11:07:20
 * @LastEditTime: 2021-04-28 09:39:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\commonForm\config.js
 */
export default {
  input: {
    component: "el-input",
    props: {
      clearable: true,
    },
  },
  textarea: {
    component: "el-input",
    props: {
      type: "textarea"
    },
  },
  select: {
    component: "LLSelect",
    props: {
      placeholder: "请选择",
      clearable: true
    },
  },
  datePicker: {
      component: "el-date-picker",
      props: {
        type: 'date',
        placeholder: '选择日期'
      }
  },
  dateRange: {
      component: "LLRangeDate",
      props: {
          start: {
            placeholder: '选择日期',
            type: 'date'
          },
          end: {
            placeholder: '选择日期',
            type: 'date'
          }
      }
  },
  switch: {
    component: "el-switch",
    props: {
      
    }
  },
  checkbox: {
    component: "LLCheckboxGroup",
    props: {
      size: 'small',
      options: []
    }
  },
  radio: {
    component: "LLRadioGroup",
    props: {
      size: 'small',
      options: []
    }
  }
};
