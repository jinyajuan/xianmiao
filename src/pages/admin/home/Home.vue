<template>
  <div>
    <home-header></home-header>
    <home-center></home-center>
    <home-footer></home-footer>
    <admin-exit></admin-exit>
  </div>
</template>

<script>
import HomeHeader from '@/pages/admin/home/components/Header'
import HomeCenter from '@/pages/admin/home/components/Center'
import AdminExit from '@/pages/admin/exit/Exit'
import HomeFooter from '@/pages/admin/home/components/Footer'
export default {
  name: 'AdminHome',
  components: {
    HomeHeader,
    HomeCenter,
    AdminExit,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
