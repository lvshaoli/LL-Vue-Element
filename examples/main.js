/*
 * @Author: your name
 * @Date: 2021-04-27 11:56:40
 * @LastEditTime: 2021-05-07 09:22:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\examples\main.js
 */
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import LSLElement from "../lib/lsl-element.common";
import '../lib/lsl-element.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(LSLElement);
new Vue({
  render: h => h(App),
}).$mount('#app')
