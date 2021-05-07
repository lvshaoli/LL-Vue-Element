/*
 * @Author: your name
 * @Date: 2021-05-07 08:51:55
 * @LastEditTime: 2021-05-07 08:56:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-common-component\packages\markdowneditor\index.js
 */
const mavonEditor = require('./mavon-editor.vue');
const VueMavonEditor = {
    markdownIt: mavonEditor.mixins[0].data().markdownIt,
    mavonEditor: mavonEditor,
    LeftToolbar: require('./components/md-toolbar-left'),
    RightToolbar: require('./components/md-toolbar-right'),
    install: function(Vue) {
        Vue.component('mavon-editor', mavonEditor);
    }
};

module.exports = VueMavonEditor;