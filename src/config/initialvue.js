/*
 * @Author: sunzhongjie
 * @Date: 2020-12-18 14:17:20
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-13 14:11:44
 */
import '@/utils/FlexibleFont.js'; // 仅限于移动端项目使用, 配合postcss-pxtorem
// 属性
import _SScroll from '@/utils/ScrollPenetrate';
import _SDelay from '@/utils/DelayLoad';

// 组件
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';

let components = {
  'SzjHeader': Header,
  'SzjFooter': Footer,
}
/**example->
 * filters:{ 'DateFormat': function(){} }
 */
let filters = {}

export default function (Vue) {
  console.log(location.pathname)
  // 挂在全局的 vue 属性
  Object.assign(Vue.prototype, {
    _SScroll,           // 移动端滚动穿透问题
    _SDelay,            // 延迟方法
  })
  // 挂在全局的 filter
  for(let name in filters) {
    Vue.filter(name, filters[name]);
  }
  // 挂在全局的 组件
  for(let name in components) {
    // kebab-case, 短横线分隔命名(推荐, 防止与未来的命名冲突)
    Vue.component(name, components[name]);
  }
}