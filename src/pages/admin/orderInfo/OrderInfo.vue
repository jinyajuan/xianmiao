<template>
  <div>
    <order-info-header></order-info-header>
    <order-info-center></order-info-center>
    <home-footer></home-footer>
    <admin-exit></admin-exit>
  </div>
</template>

<script>
import OrderInfoHeader from '@/pages/admin/orderInfo/components/Header'
import OrderInfoCenter from '@/pages/admin/orderInfo/components/center'
import HomeFooter from '@/pages/admin/home/components/Footer'
import AdminExit from '@/pages/admin/exit/Exit'
export default {
  name: 'AdminOrderInfo',
  components: {
    OrderInfoHeader,
    OrderInfoCenter,
    HomeFooter,
    AdminExit
  }
}
</script>

<style scoped>

</style>
