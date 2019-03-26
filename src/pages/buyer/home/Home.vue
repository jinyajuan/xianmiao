<template>
  <div>
    <home-header></home-header>
    <router-link to="/list">11</router-link>
  </div>
</template>

<script>
import HomeHeader from '@/pages/buyer/home/components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
