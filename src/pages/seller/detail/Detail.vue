<template>
  <div>
    <detail-header></detail-header>
    <detail-center></detail-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import DetailHeader from '@/pages/seller/detail/components/Header'
import DetailCenter from '@/pages/seller/detail/components/Center'
import HomeFooter from '@/pages/seller/home/components/Footer'
export default {
  name: 'SellerDetail',
  data () {
    return {
    }
  },
  components: {
    DetailHeader,
    DetailCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
