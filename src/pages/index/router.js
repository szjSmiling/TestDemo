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
    component: () => import('@pages/index/child/index.vue')
  }]
})
export default router;