/*
 * @Author: lvshaoli
 * @Date: 2021-04-25 15:41:19
 * @LastEditTime: 2021-04-28 11:46:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\components\common\index.js
 */
import CommonPage from "./commonPage";
import Breadcrumb from "./breadcrumb";
import SearchHeader from "./searchHeader";
import CommonTable from "./commonTable";
import HandleBtns from "./handleBtns";
import CommonDialog from "./commonDialog";
import CommonForm from "./commonForm";
import Pagination from "./Pagination";
import SecordLevelMenu from "./secordLevelMenu";
import SetTable from "./setTable";
const components = [
    CommonPage,
    Breadcrumb,
    SearchHeader,
    CommonTable,
    HandleBtns,
    CommonDialog,
    CommonForm,
    Pagination,
    SecordLevelMenu,
    SetTable
];


const install = function(Vue, opts = {}) {
  
    components.forEach(component => {
      Vue.component(component.name, component);
    });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
  

export default {
    version: '0.01',
    CommonPage,
    Breadcrumb,
    SearchHeader,
    CommonTable,
    HandleBtns,
    CommonDialog,
    CommonForm,
    Pagination,
    SecordLevelMenu,
    SetTable,
    install
}