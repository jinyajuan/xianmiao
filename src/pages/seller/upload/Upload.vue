<template>
  <div>
    <upload-header></upload-header>
    <upload-goods-info></upload-goods-info>
    <home-footer></home-footer>
  </div>
</template>

<script>
import UploadHeader from '@/pages/seller/upload/components/Header'
import UploadGoodsInfo from '@/pages/seller/upload/components/GoodsInfo'
import HomeFooter from '@/pages/seller/home/components/Footer'
export default {
  name: 'SellerUpload',
  components: {
    UploadHeader,
    UploadGoodsInfo,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
