<template>
  <div>
    <home-header></home-header>
    <home-center></home-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/pages/admin/home/components/Header'
import HomeCenter from '@/pages/admin/home/components/Center'
import HomeFooter from '@/pages/admin/home/components/Footer'
export default {
  name: 'AdminHome',
  components: {
    HomeHeader,
    HomeCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
