/*
 * @Author: sunzhongjie
 * @Date: 2020-12-11 11:06:21
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-11 11:11:08
 */
import Vue from "vue";
import Router from "vue-router";
/*webpackChunkName: 为预加载的文件取别名*/
Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [{
    path: '/404',
    name: '404',
    // component: require(/* webpackChunkName: "chunk-home" */'@pages/index/App.vue').default
    // component: () => import(/* webpackChunkName: "chunk-home" */'@pages/index/child/index.vue')
    component: () => import('@pages/404/view/index.vue')
  }]
})
export default router;