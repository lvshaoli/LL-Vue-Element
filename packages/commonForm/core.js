/*
 * @Author: your name
 * @Date: 2021-04-27 14:28:43
 * @LastEditTime: 2021-04-27 17:33:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\packages\commonForm\core.js
 */
  import configMap from "./config";

 export function computeFormItem(option) {
     const res = configMap[option.type || 'input'];
     option.type = res.component;
     option.prop = option.label+ "_";
     option.props = Object.assign({}, res.props, option.props);
     option.rules = getRules(option);
     return option;
 }


 export function getRules(option) {
     const { rule, isRequired, type, label} = option || {};
      const isInput = (['el-input', 'el-input-number'].indexOf(type)) != -1;
     if (rule && isRequired) {
         return rule;
     } else if (isRequired) {
        return {
            required: true,
            message: `请${isInput ? '输入': '选择'}${label}`,
            trigger: `${isInput ? 'blur': 'change'}`
        }
     } else {
         return {};
     }
 }