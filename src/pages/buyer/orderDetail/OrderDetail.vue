<template>
  <div>
    <order-detail-header></order-detail-header>
    <order-detail-center></order-detail-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import OrderDetailHeader from '@/pages/buyer/orderDetail/components/Header'
import OrderDetailCenter from '@/pages/buyer/orderDetail/components/Center'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'BuyerOrderDetail',
  data () {
    return {
    }
  },
  components: {
    OrderDetailHeader,
    OrderDetailCenter,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
