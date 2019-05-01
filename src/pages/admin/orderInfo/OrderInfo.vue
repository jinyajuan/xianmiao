<template>
  <div>
    <order-info-header></order-info-header>
    <order-info-center></order-info-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import OrderInfoHeader from '@/pages/admin/orderInfo/components/Header'
import OrderInfoCenter from '@/pages/admin/orderInfo/components/center'
import HomeFooter from '@/pages/admin/home/components/Footer'
export default {
  name: 'AdminOrderInfo',
  components: {
    OrderInfoHeader,
    OrderInfoCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
