// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueRouter from "vue-router"
// import swiper from '@assets/css/swiper.min.css'

//导入swiper
import VueAwesomeSwiper from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'
//注册
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = true

// Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
})
