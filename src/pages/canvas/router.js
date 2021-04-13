/*
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-12 10:19:43
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [{
    path: '/canvas',
    name: 'canvas',
    component: () => import('@pages/canvas/view/index.vue')
  }]
})

router.beforeEach((to, from, next) => {
  // document.title = to.name
  next()
})
export default router;