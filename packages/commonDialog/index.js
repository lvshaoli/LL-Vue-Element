/*
 * @Author: lvshaoli
 * @Date: 2021-04-28 10:13:40
 * @LastEditTime: 2021-04-28 10:14:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\packages\commonDialog\index.js
 */

import CommonDialog from './index.vue'

CommonDialog.install = function(Vue) {
  Vue.component(CommonDialog.name, CommonDialog)
}
export default CommonDialog