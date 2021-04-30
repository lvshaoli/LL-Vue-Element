<!--
 * @Author: your name
 * @Date: 2021-04-19 10:08:32
 * @LastEditTime: 2021-04-28 11:54:59
 * @LastEditors: Please set LastEditors
 * @Description: 嵌套表格的封装
 * @FilePath: \openlayersproj\src\components\setTable\index.vue
-->
<template>
  <div class="table">
    <el-table
      v-loading="loading"
      :data="parentTableData"
      height="450"
      @expand-change="expandChange"
      :expand-row-keys="expandedBatchs"
      @current-change="clickBatchRow"
      :row-key="getBatchKeys"
      highlight-current-row
      v-bind="$attrs"
      v-on="$listeners"
    >
      <!-- 嵌套表格 -->
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :height="expandTableHeight" v-loading="childLoading" :data="props.row.childList">
            <template v-for="(item, index) in columnChild">
              <el-table-column
                v-if="item.slotScope"
                v-bind="item"
                :key="item.prop + `_` + index"
                v-on="$listeners"
              >
                <template slot-scope="scope">
                  <slot :name="item.prop" v-bind="scope"></slot>
                </template>
              </el-table-column>
              <free-column
                v-else
                v-bind="$attrs"
                :key="item.prop"
                :column="item"
              />
            </template>
          </el-table>
        </template>
      </el-table-column>
      <template v-for="(item, index) in columnParent">
        <el-table-column
          v-if="item.slotScope"
          v-bind="item"
          :key="item.prop + index"
          v-on="$listeners"
        >
          <template slot-scope="scope">
            <slot :name="item.prop" v-bind="scope"></slot>
          </template>
        </el-table-column>
        <free-column v-else v-bind="$attrs" :key="item.prop" :column="item" />
      </template>
    </el-table>
    <div style="margin-top: 12px; background-color: white;">
      <template v-if="pagination">
        <pagination
        layout="total, prev, pager, next"
          v-if="parentTableData.length > 0"
          v-bind="$attrs"
          v-on="$listeners"
        />
      </template>
    </div>
  </div>
</template>

<script>
import FreeColumn from "../commonTable/column";
import Pagination from "../Pagination";
export default {
  name: "LLSettable",
  components: {
    FreeColumn,
    Pagination,
  },
  props: {
    //    {
    //        label:''
    //        render: () => ''
    //    },
    //    {
    //        label: '',
    //        prop: ''
    //    }
    expandTableHeight: {
      type: Number,
      default: 300
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    columnParent: {
      type: Array,
      default: () => [],
    },
    columnChild: {
      type: Array,
      default: () => [],
    },
    parentTableData: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },

    childLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      expandedBatchs: [],
    };
  },
  methods: {
    expandChange(row, expandedRows, setExpand) {
      this.$emit("expandChange", row, expandedRows, setExpand);
    },

    clickBatchRow(row) {
      console.log("点击行", row);
      this.$emit("clickBatchRow", row);
    },
    getBatchKeys(row) {
      return row.id;
    },
  },
};
</script>
