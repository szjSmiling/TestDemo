/*
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-11 11:08:20
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [{
    path: '/scroll',
    name: 'scroll',
    // component: require(/* webpackChunkName: "chunk-scroll" */'@pages/scroll/App.vue').default
    // component: () => import(/* webpackChunkName: "chunk-scroll" */'@pages/scroll/child/index.vue')
    component: () => import('@pages/scroll/view/index.vue')
  }]
})
export default router;