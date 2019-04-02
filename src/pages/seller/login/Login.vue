<template>
  <div>
    <login-header @goBack="handleGoBack"></login-header>
    <login-center></login-center>
  </div>
</template>

<script>
import LoginHeader from '@/pages/seller/login/components/Header'
import LoginCenter from '@/pages/seller/login/components/Center'
export default {
  name: 'SellerLogin',
  components: {
    LoginHeader,
    LoginCenter
  },
  methods: {
    handleGoBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
