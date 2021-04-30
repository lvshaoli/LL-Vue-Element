
### 示例：
```
const column = [
  { label: '日期', prop: 'date', width: 100 },
  { label: '姓名', prop: 'name' },
  { label: '邮编', prop: 'zip' },
  {
    label: '地址',
    prop: 'address',
    render: (h, scope) => {
      return (<el-tag>{scope.row.address}<el-tag>)
    }
  },
  {
    label: '组件',
    prop: 'cmp',
    component: EditBtn,
    listeners: {
      'row-edit'(row) {
        console.log('row-edit', row)
      }
    }
  }
]
```
## 示例
```
<template>
  <common-table border stripe :data="data" :column="column"></common-table>
</template>

<script>
import CommonTable from './commonTable'

export default {
  components: {
    CommonTable
  },
  data() {
    return {
      column: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '省份', prop: 'province' },
        { label: '市区', prop: 'city' },
        { label: '地址', prop: 'address' }
      ],
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  }
}
</script>
```