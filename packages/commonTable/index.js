/*
 * @Author: your name
 * @Date: 2021-04-20 10:26:53
 * @LastEditTime: 2021-04-28 10:09:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\control\admin\dataProduction\commonPage\commonTable\index.js
 */
import CommonTable from './table.vue'

CommonTable.install = function(Vue) {
  Vue.component(CommonTable.name, CommonTable)
}
export default CommonTable