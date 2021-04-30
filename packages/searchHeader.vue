<!--
 * @Author: your name
 * @Date: 2021-04-19 15:22:38
 * @LastEditTime: 2021-04-28 11:37:03
 * @LastEditors: Please set LastEditors
 * @Description: 搜索框集合和按钮的封装
 * @FilePath: \openlayersproj\src\control\admin\dataProduction\commonPage\searchPage.vue
-->
<template>
  <div class="data-head">
    <div class="search-item" v-for="(item, index) in inputOptions" :key="index">
      <div class="search-item-label">{{ item.label }}:</div>
      <!-- 下拉选择 -->
      <el-select
        v-if="item.type === 'select'"
        v-model="item.value"
        clearable
        placeholder="请选择"
      >
        <el-option
          v-for="selectItem in item.options"
          :key="selectItem.value"
          :label="selectItem.label"
          :value="selectItem.value"
        >
        </el-option>
      </el-select>
      <!-- 时间选择 -->
      <div v-else-if="item.type === 'dateArea'" class="search-item-date">
        <el-date-picker
          v-model="item.start"
          value-format="yyyy-MM-dd"
          placeholder="开始时间"
          style="width: 140px;margin-right: 3px;"
        ></el-date-picker>
        <div class="line-gap">--</div>
        <el-date-picker
          v-model="item.end"
          value-format="yyyy-MM-dd"
          placeholder="截止时间"
          style="width: 140px;"
        ></el-date-picker>
      </div>
      <!-- 输入框 -->
      <el-input
        v-else
        v-model="item.value"
        clearable
        :placeholder="item.placeholder"
      ></el-input>
    </div>
    <div class="button-group">
      <div
        class="search-item"
        v-for="(btnItem, index) in buttonOptions"
        :key="index"
      >
        <el-button :type="btnItem.type || 'primary'" @click="btnItem.click">{{
          btnItem.text
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
  props: {
    inputOptions: {
      type: Array,
      default: () => [],
    },
    buttonOptions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.data-head {
  padding: 12px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .search-item-date {
    display: flex;
    align-items: center;
    .search-item-label {
      margin-right: 8px;
      white-space: nowrap;
    }
    /deep/.el-input__inner {
      height: 30px;
       width: 120px !important;
    }
    /deep/ .el-input__icon {
      line-height: normal;
      height: 100%;
    }
    .line-gap {
      width: 20px;
      margin-left: -15px;
    }
  }
  .search-item {
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-bottom: 24px;
    .search-item-label {
      margin-right: 8px;
      white-space: nowrap;
      width: 26%;
    }
    /deep/.el-input__inner {
      width: 200px;
      height: 30px;
    }

    /deep/ .el-input__icon {
      line-height: normal;
      height: 100%;
    }
    /deep/ .el-range-separator {
      height: auto;
    }
  }

  .date-item {
    /deep/.el-input__inner {
      width: 260px;
      height: 30px;
      margin-left: -20px;
    }
  }

  .button-group {
    display: flex;
    align-items: center;
    /deep/ .el-button {
      padding: 8px 16px;
      font-size: 13px;
    }
  }
}
</style>
