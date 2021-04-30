<!--
 * @Author: your name
 * @Date: 2021-04-20 10:27:47
 * @LastEditTime: 2021-04-28 11:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\control\admin\dataProduction\commonPage\commonTable\table.vue
-->
<template>
  <div class="free-table">
    <el-table ref="elTable" :data="data" v-bind="$attrs" v-on="$listeners">
      <template v-for="item in tbColumns">
        <el-table-column
          v-if="item.slotScope"
          v-bind="item"
          :key="item.prop"
          v-on="$listeners"
        >
          <template slot-scope="scope">
            <slot :name="item.prop" v-bind="scope"></slot>
          </template>
        </el-table-column>

        <free-column v-else v-bind="$attrs" :key="item.prop" :column="item" />
      </template>
    </el-table>

    <template v-if="pagination">
      <pagination
        v-if="data.length > 0"
        v-bind="$attrs"
        v-on="$listeners"
        layout="total, prev, pager, next"
      />
    </template>
  </div>
</template>

<script>
import FreeColumn from "./column";
import Pagination from "../Pagination";
export default {
  name: "LLCommontable",
  components: {
    Pagination,
    FreeColumn,
  },
  props: {
    data: Array,
    column: Array,
    columnsProps: Object,
    pagination: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tbColumns() {
      const { column, columnsProps: props } = this;
      return column.map((col) => {
        const it = Object.assign({}, props, col);
        return it;
      });
    },
  },
};
</script>
