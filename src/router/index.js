import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/buyer/home/Home'
import Goods from '@/pages/buyer/goods/Goods'
import Me from '@/pages/buyer/me/Me'
import Login from '@/pages/buyer/login/Login'
import Reg from '@/pages/buyer/reg/Reg'
import Detail from '@/pages/buyer/detail/Detail'
import Cart from '@/pages/buyer/cart/Cart'
import Order from '@/pages/buyer/order/Order'
import Pay from '@/pages/buyer/pay/Pay'

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
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/pay',
      name: 'Pay',
      component: Pay
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
