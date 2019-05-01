<template>
  <div>
    <seller-info-header></seller-info-header>
    <seller-info-center></seller-info-center>
    <home-footer></home-footer>
    <admin-exit></admin-exit>
  </div>
</template>

<script>
import SellerInfoHeader from '@/pages/admin/sellerInfo/components/Header'
import SellerInfoCenter from '@/pages/admin/sellerInfo/components/center'
import HomeFooter from '@/pages/admin/home/components/Footer'
import AdminExit from '@/pages/admin/exit/Exit'
export default {
  name: 'AdminBuyerInfo',
  components: {
    SellerInfoHeader,
    SellerInfoCenter,
    HomeFooter,
    AdminExit
  }
}
</script>

<style scoped>

</style>
