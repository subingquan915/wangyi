import Vue from 'vue'
import Router from 'vue-router'
// import VueRouter from "vue-router"
// import HelloWorld from '@/components/HelloWor ld'
import zhuye from '../pages/zhuye'
import xinpin from '../pages/xinpin'
import fenlei from '../pages/fenlei'

import shiwu from '../pages/shiwu'
import zhenxuan from '../pages/zhenxuan'
import goodsCart from '../pages/goodsCart'
import my from '../pages/my'


Vue.use(Router)
// Vue.use(VueRouter)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {path:"/",redirect:"/zhuye"},
    {
      path: '/zhuye',
      name: 'zhuye',
      component: zhuye
    },
    {
      path: '/xinpin',
      name: 'xinpin',
      component: xinpin
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/shiwu',
      name: 'shiwu',
      component: shiwu
    },
    {
      path: '/zhenxuan',
      name: 'zhenxuan',
      component: zhenxuan
    },
    {
      path: '/goodsCart',
      name: 'goodsCart',
      component: goodsCart
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
