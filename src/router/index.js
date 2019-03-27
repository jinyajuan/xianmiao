import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/buyer/home/Home'
import Goods from '@/pages/buyer/goods/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
