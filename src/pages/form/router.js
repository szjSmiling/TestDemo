/*
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-09 16:25:28
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [{
    path: '/form',
    name: 'form',
    // component: require(/* webpackChunkName: "chunk-scroll" */'@pages/scroll/App.vue').default
    // component: () => import(/* webpackChunkName: "chunk-scroll" */'@pages/scroll/child/index.vue')
    component: () => import('@pages/form/view/index.vue')
  }]
})
export default router;