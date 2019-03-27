<template>
  <div>
    <me-header></me-header>
    <me-login-entry></me-login-entry>
    <me-items></me-items>
    <home-footer></home-footer>
  </div>
</template>

<script>
import MeHeader from '@/pages/buyer/me/components/Header'
import MeLoginEntry from '@/pages/buyer/me/components/LoginEntry'
import MeItems from '@/pages/buyer/me/components/Items'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'Me',
  components: {
    MeHeader,
    MeLoginEntry,
    MeItems,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
