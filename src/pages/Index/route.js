// IndexRoute
const IndexRoute = [
  {
    path: '/',
    name: 'home',
    // component: require(/* webpackChunkName: "home" */'@pages/Index/Index.vue').default
    component: () => import(/* webpackChunkName: "home" */'@pages/Index/Index.vue')
  }
]
export default IndexRoute;