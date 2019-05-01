<template>
  <div>
    <seller-info-header></seller-info-header>
    <seller-info-center></seller-info-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import SellerInfoHeader from '@/pages/admin/sellerInfo/components/Header'
import SellerInfoCenter from '@/pages/admin/sellerInfo/components/center'
import HomeFooter from '@/pages/admin/home/components/Footer'
export default {
  name: 'AdminBuyerInfo',
  components: {
    SellerInfoHeader,
    SellerInfoCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
