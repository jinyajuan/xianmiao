<template>
  <div>
    <login-header></login-header>
    <login-center></login-center>
  </div>
</template>

<script>
import LoginHeader from '@/pages/admin/login/components/Header'
import LoginCenter from '@/pages/admin/login/components/Center'
export default {
  name: 'AdminLogin',
  components: {
    LoginHeader,
    LoginCenter
  }
}
</script>

<style scoped>

</style>
