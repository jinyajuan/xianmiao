<template>
  <div>
    <goods-header></goods-header>
    <goods-list></goods-list>
    <home-footer></home-footer>
  </div>
</template>

<script>
import GoodsHeader from '@/pages/buyer/goods/components/Header'
import GoodsList from '@/pages/buyer/goods/components/List'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'Goods',
  components: {
    GoodsHeader,
    GoodsList,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
