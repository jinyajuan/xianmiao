<template>
  <div>
    <login-header></login-header>
    <login-center></login-center>
  </div>
</template>

<script>
import LoginHeader from '@/pages/buyer/login/components/Header'
import LoginCenter from '@/pages/buyer/login/components/Center'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginCenter
  }
}
</script>

<style scoped>

</style>
