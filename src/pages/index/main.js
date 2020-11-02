import Vue from 'vue'
import router from './router.js'
import App from './App.vue'

Vue.config.productionTip = false
const newVue = new Vue({
  // store,
  router,
  render: h => h(App)
})
setTimeout(() => {
  // 清楚白屏时 loading 的计时器
  clearInterval(window.run)
  newVue.$mount('#app')
}, 2000)

