<template>
  <div>
    <reg-header @goBack="handleGoBack"></reg-header>
    <reg-center></reg-center>
  </div>
</template>

<script>
import RegHeader from '@/pages/seller/reg/components/Header'
import RegCenter from '@/pages/seller/reg/components/Center'
export default {
  name: 'SellerReg',
  components: {
    RegHeader,
    RegCenter
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
