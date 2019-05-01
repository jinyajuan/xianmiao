<template>
  <div>
    <order-header></order-header>
    <order-center></order-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import OrderHeader from '@/pages/admin/order/components/Header'
import OrderCenter from '@/pages/admin/order/components/Center'
import HomeFooter from '@/pages/admin/home/components/Footer'
export default {
  name: 'AdminOrder',
  components: {
    OrderHeader,
    OrderCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
