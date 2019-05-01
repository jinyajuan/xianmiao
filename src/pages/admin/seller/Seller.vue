<template>
  <div>
    <seller-header></seller-header>
    <seller-center></seller-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import SellerHeader from '@/pages/admin/seller/components/Header'
import SellerCenter from '@/pages/admin/seller/components/Center'
import HomeFooter from '@/pages/admin/home/components/Footer'
export default {
  name: 'AdminSeller',
  components: {
    SellerHeader,
    SellerCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
