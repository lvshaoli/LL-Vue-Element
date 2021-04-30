/*
 * @Author: your name
 * @Date: 2021-04-20 14:42:41
 * @LastEditTime: 2021-04-28 10:12:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\commonForm\index.js
 */
import CommonForm from './CommonForm.vue'

CommonForm.install = function(Vue) {
    Vue.component(CommonForm.name, CommonForm)
  }
export default CommonForm;
export { CommonForm }