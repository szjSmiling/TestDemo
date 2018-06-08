import Vue from 'vue';
import Router from 'vue-router';
import {Indicator} from 'mint-ui';

const HelloWorld = resolve => require(['@/pages/HelloWorld.vue'],resolve);
const PDF = resolve => require(['@/pages/showPDF.vue'],resolve);

Vue.use(Router);

const router =  new Router({
  mode: "history",//如果不更改设置,增加mode;vue会默认使用hash模式,该模式下会将路径格式化为#开头
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    },
    {
      path:'/PDF',
      component:PDF
    }
  ]
});
router.beforeEach((to, from, next) => {
  Indicator.close();
  next();
});
export default router;
