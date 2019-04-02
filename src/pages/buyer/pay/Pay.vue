<template>
  <div>
    <pay-header></pay-header>
    <pay-success></pay-success>
    <home-footer></home-footer>
  </div>
</template>

<script>
import PayHeader from '@/pages/buyer/pay/components/Header'
import PaySuccess from '@/pages/buyer/pay/components/Success'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'Pay',
  components: {
    PayHeader,
    PaySuccess,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
