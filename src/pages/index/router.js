/*
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-09 14:32:51
 */
import Vue from "vue";
import Router from "vue-router";
/*webpackChunkName: 为预加载的文件取别名*/
Vue.use(Router)
const router = new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'szjSmiling',
    // component: require(/* webpackChunkName: "chunk-home" */'@pages/index/App.vue').default
    // component: () => import(/* webpackChunkName: "chunk-home" */'@pages/index/child/index.vue')
    component: () => import('@pages/index/view/index.vue')
  }]
})

router.beforeEach((to, from, next) => {
  resetHtmlTKD({
    title: to.name
  })
  next()
})

function resetHtmlTKD(seoTDK) {
  const head = document.getElementsByTagName('head')[0];
  const viewport = document.querySelector('meta[name="viewport"]');
  let desMeta = document.querySelector('meta[name="description"]');
  let keyMeta = document.querySelector('meta[name="keywords"]');
  // 默认的title, description, keywords
  let title = "szjSmiling",
    description = "study study hard, day day up!",
    keywords = "A private blog website";
  if(seoTDK) { // 修改页面的 title, description, keywords
    title = seoTDK.title;
    seoTDK.description && (description = seoTDK.description);
    seoTDK.keywords && (keywords = seoTDK.keywords);
  }
  title && (document.title = title);
  // 把 title 移到head 的 viewport 上面
  const titleEle = document.getElementsByTagName('title')[0];
  head.insertBefore(titleEle, viewport);
  // 已经存在对应标签就替换, 否则新建
  if(desMeta) {
    desMeta.setAttribute('content', description);
  }else {
    createMeta('description', description, head, viewport);
  }
  if(keyMeta) {
    keyMeta.setAttribute('content', keywords);
  }else {
    createMeta('keywords', keywords, head, viewport);
  }
}
function createMeta(name, content, head, viewport) {
  const meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  head.insertBefore(meta, viewport);
}
export default router;