import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/buyer/home/Home'
import Goods from '@/pages/buyer/goods/Goods'
import Me from '@/pages/buyer/me/Me'

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
    }, {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
