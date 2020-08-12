import Vue from "vue";
import Router from "vue-router";
import IndexRoute from '@pages/Index/route.js';

Vue.use(Router)

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
      component: () => import('@pages/Index/Index.vue')
    },
    ...IndexRoute,
  ]
})
export default router;