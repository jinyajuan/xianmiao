<template>
  <div>
    <home-header></home-header>
    <buyer-info-center></buyer-info-center>
    <home-footer></home-footer>
    <admin-exit></admin-exit>
  </div>
</template>

<script>
import HomeHeader from '@/pages/admin/buyerInfo/components/Header'
import BuyerInfoCenter from '@/pages/admin/buyerInfo/components/center'
import HomeFooter from '@/pages/admin/home/components/Footer'
import AdminExit from '@/pages/admin/exit/Exit'
export default {
  name: 'AdminBuyerInfo',
  components: {
    HomeHeader,
    BuyerInfoCenter,
    HomeFooter,
    AdminExit
  }
}
</script>

<style scoped>

</style>
