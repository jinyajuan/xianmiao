<template>
  <div>
    <info-header></info-header>
    <info-center></info-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import InfoHeader from '@/pages/seller/info/components/Header'
import InfoCenter from '@/pages/seller/info/components/Center'
import HomeFooter from '@/pages/seller/home/components/Footer'
export default {
  name: 'SellerInfo',
  components: {
    InfoHeader,
    InfoCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
