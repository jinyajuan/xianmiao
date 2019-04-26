<template>
  <div>
    <search-header></search-header>
    <search-history></search-history>
    <home-footer></home-footer>
  </div>
</template>

<script>
import SearchHeader from '@/pages/buyer/search/components/Header'
import SearchHistory from '@/pages/buyer/search/components/History'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'BuyerSearch',
  components: {
    SearchHeader,
    SearchHistory,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
