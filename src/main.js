import Vue from 'vue'

import router from './router.js'
import App from './App.vue'
import { Button } from 'vant'
Vue.use(Button)
Vue.config.productionTip = false
new Vue({
  // store,
  router,
  render: h => h(App),
})
.$mount('#app')
