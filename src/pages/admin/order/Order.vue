<template>
  <div>
    <order-header></order-header>
    <order-center></order-center>
    <home-footer></home-footer>
    <admin-exit></admin-exit>
  </div>
</template>

<script>
import OrderHeader from '@/pages/admin/order/components/Header'
import OrderCenter from '@/pages/admin/order/components/Center'
import HomeFooter from '@/pages/admin/home/components/Footer'
import AdminExit from '@/pages/admin/exit/Exit'
export default {
  name: 'AdminOrder',
  components: {
    OrderHeader,
    OrderCenter,
    HomeFooter,
    AdminExit
  }
}
</script>

<style scoped>

</style>
