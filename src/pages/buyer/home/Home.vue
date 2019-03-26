<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommond></home-recommond>
  </div>
</template>

<script>
import HomeHeader from '@/pages/buyer/home/components/Header'
import HomeSwiper from '@/pages/buyer/home/components/Swiper'
import HomeIcons from '@/pages/buyer/home/components/Icons'
import HomeRecommond from '@/pages/buyer/home/components/Recommond'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommond
  }
}
</script>

<style scoped>

</style>
