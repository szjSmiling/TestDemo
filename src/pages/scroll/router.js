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
    component: () => import('@pages/scroll/child/index.vue')
  }]
})
export default router;