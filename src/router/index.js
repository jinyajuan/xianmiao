import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/buyer/home/Home'
import Goods from '@/pages/buyer/goods/Goods'
import Me from '@/pages/buyer/me/Me'
import Login from '@/pages/buyer/login/Login'
import Reg from '@/pages/buyer/reg/Reg'

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
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/reg',
      name: 'Reg',
      component: Reg
    }
  ]
})
