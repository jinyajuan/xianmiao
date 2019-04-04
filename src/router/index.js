import Vue from 'vue'
import Router from 'vue-router'
import BuyerHome from '@/pages/buyer/home/Home'
import BuyerGoods from '@/pages/buyer/goods/Goods'
import BuyerMe from '@/pages/buyer/me/Me'
import BuyerLogin from '@/pages/buyer/login/Login'
import BuyerReg from '@/pages/buyer/reg/Reg'
import BuyerDetail from '@/pages/buyer/detail/Detail'
import BuyerCart from '@/pages/buyer/cart/Cart'
import BuyerOrder from '@/pages/buyer/order/Order'
import BuyerPay from '@/pages/buyer/pay/Pay'
import SellerLogin from '@/pages/seller/login/Login'
import SellerReg from '@/pages/seller/reg/Reg'
import SellerHome from '@/pages/seller/home/Home'
import SellerUpload from '@/pages/seller/upload/Upload'
import SellerInfo from '@/pages/seller/info/Info'
import SellerOrder from '@/pages/seller/order/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BuyerHome',
      component: BuyerHome
    }, {
      path: '/buyer/goods',
      name: 'BuyerGoods',
      component: BuyerGoods
    }, {
      path: '/buyer/me',
      name: 'BuyerMe',
      component: BuyerMe
    }, {
      path: '/buyer/login',
      name: 'BuyerLogin',
      component: BuyerLogin
    }, {
      path: '/buyer/reg',
      name: 'BuyerReg',
      component: BuyerReg
    }, {
      path: '/buyer/detail',
      name: 'BuyerDetail',
      component: BuyerDetail
    }, {
      path: '/buyer/cart',
      name: 'BuyerCart',
      component: BuyerCart
    }, {
      path: '/buyer/order',
      name: 'BuyerOrder',
      component: BuyerOrder
    }, {
      path: '/buyer/pay',
      name: 'BuyerPay',
      component: BuyerPay
    }, {
      path: '/seller/login',
      name: 'SellerLogin',
      component: SellerLogin
    }, {
      path: '/seller/reg',
      name: 'SellerReg',
      component: SellerReg
    }, {
      path: '/seller/home',
      name: 'SellerHome',
      component: SellerHome
    }, {
      path: '/seller/upload',
      name: 'SellerUpload',
      component: SellerUpload
    }, {
      path: '/seller/info',
      name: 'SellerInfo',
      component: SellerInfo
    }, {
      path: '/seller/order',
      name: 'SellerOrder',
      component: SellerOrder
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
