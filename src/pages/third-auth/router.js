/*
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-03-19 10:58:35
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [{
    path: '/third-auth',
    // name: 'thrid-auth',
    component: () => import('@pages/third-auth/view/index.vue')
  }]
})
export default router;