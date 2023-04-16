import Vue from 'vue'
import Main from './Main.vue'
import router from './router/index.js'
import axios from 'axios'
import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();

axios.defaults.baseURL='http://localhost:3271';

new Vue({
  render: h => h(Main),
  router
}).$mount('#main')
