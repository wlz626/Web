import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/css/reset.css'//全局css样式
import FastClick from 'fastclick'//fastclick引入
FastClick.attach(document.body);
import './assets/css/iconfont.css'// 字体图标
import './assets/js/font'//适配 font.js
import VueAwesomeSwiper from 'vue-awesome-swiper'//引入 swiper
Vue.use(VueAwesomeSwiper);
import './assets/css/swiper.css'
import animate from 'animate.css'
import axios from 'axios'//引入axios
Vue.prototype.axios = axios;



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
