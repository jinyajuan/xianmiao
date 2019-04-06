<template>
  <div>
    <change-header></change-header>
    <change-goods-info></change-goods-info>
    <home-footer></home-footer>
  </div>
</template>

<script>
import ChangeHeader from '@/pages/seller/change/components/Header'
import ChangeGoodsInfo from '@/pages/seller/change/components/GoodsInfo'
import HomeFooter from '@/pages/seller/home/components/Footer'
export default {
  name: 'SellerUpload',
  components: {
    ChangeHeader,
    ChangeGoodsInfo,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
