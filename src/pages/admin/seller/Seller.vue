<template>
  <div>
    <seller-header></seller-header>
    <seller-center></seller-center>
    <home-footer></home-footer>
    <admin-exit></admin-exit>
  </div>
</template>

<script>
import SellerHeader from '@/pages/admin/seller/components/Header'
import SellerCenter from '@/pages/admin/seller/components/Center'
import HomeFooter from '@/pages/admin/home/components/Footer'
import AdminExit from '@/pages/admin/exit/Exit'
export default {
  name: 'AdminSeller',
  components: {
    SellerHeader,
    SellerCenter,
    HomeFooter,
    AdminExit
  }
}
</script>

<style scoped>

</style>
