<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-notice></detail-notice>
    <detail-score></detail-score>
    <detail-price></detail-price>
    <detail-desc></detail-desc>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import DetailHeader from '@/pages/buyer/detail/components/Header'
import DetailBanner from '@/pages/buyer/detail/components/Banner'
import DetailNotice from '@/pages/buyer/detail/components/Notice'
import DetailScore from '@/pages/buyer/detail/components/Score'
import DetailPrice from '@/pages/buyer/detail/components/Price'
import DetailDesc from '@/pages/buyer/detail/components/Desc'
import DetailFooter from '@/pages/buyer/detail/components/Footer'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailNotice,
    DetailScore,
    DetailPrice,
    DetailDesc,
    DetailFooter
  }
}
</script>

<style scoped>

</style>
