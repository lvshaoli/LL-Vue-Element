<!--
 * @Author: your name
 * @Date: 2021-04-20 10:30:23
 * @LastEditTime: 2021-04-20 10:30:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \openlayersproj\src\control\admin\dataProduction\commonPage\commonTable\render.vue
-->
<script>
export default {
  name: 'FreeRender',
  functional: true,
  props: {
    scope: Object,
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props.scope) : ''
  }
}
</script>