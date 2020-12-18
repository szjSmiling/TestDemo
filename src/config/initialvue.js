/*
 * @Author: sunzhongjie
 * @Date: 2020-12-18 14:17:20
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-18 17:39:12
 */
import '@utils/flexible.js'; // 仅限于移动端项目使用, 配合postcss-pxtorem
import Header from '@components/Header.vue';
import Footer from '@components/Footer.vue';

let components = {
  'szj-header': Header,
  'szj-footer': Footer,
}
let filters = {

}

export default function (Vue) {
  console.log(location.pathname)
  // 挂在全局的 vue 属性
  Object.assign(Vue.prototype, {
  
  });
  // 挂在全局的 filter
  for(let filter in filters) {
    Vue.filter(filter, );
  }
  // 挂在全局的 组件
  for(let name in components) {
    console.log(name)
    // kebab-case, 短横线分隔命名(推荐, 防止与未来的命名冲突)
    Vue.component(name, components[name]);
  }
}