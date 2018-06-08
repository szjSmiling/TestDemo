// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import {
  Button,
  DatetimePicker,
  Field,
  Picker,
  Popup,
  Radio,
  Range
} from "mint-ui";
import Vue from 'vue';
import App from './App';
import axios from "axios";// 不能使用Vue.use(axios),要使用Vue.prototype.$axios = axios;

import router from './router';
import { store } from "./vuex";
import resource from "vue-resource";// 可以使用$http
import { AxiosConfig } from "./models/utils/AxiosConfig";
import './assets/iconfont/iconfont.css';//引入字体图标

Vue.use(resource);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Picker.name, Picker);
Vue.component("mt-button", Button);
Vue.component("mt-range", Range);
Vue.component("mt-popup", Popup);
Vue.component("mt-radio", Radio);
Vue.component(Field.name, Field);
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
AxiosConfig.init();

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  methods:{
    onLoadFinish() {
      try {
        window.heg && window.heg.onViewShow();
      } catch (e) {
        // statements
      }
    },
  },
  mounted() {
    this.onLoadFinish();
  },
  render: h => h(App)
});