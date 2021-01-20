/*
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-20 14:57:41
 */
import Vue from "vue";
import Router from "vue-router";
/*webpackChunkName: 为预加载的文件取别名*/
Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'home',
    // component: require(/* webpackChunkName: "chunk-home" */'@pages/index/App.vue').default
    // component: () => import(/* webpackChunkName: "chunk-home" */'@pages/index/child/index.vue')
    component: () => import('@pages/home/view/index.vue')
  }]
})
export default router;