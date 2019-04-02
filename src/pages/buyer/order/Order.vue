<template>
  <div>
    <order-header></order-header>
    <div class="center">
      <order-personal></order-personal>
      <order-goods></order-goods>
      <order-remake></order-remake>
    </div>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from '@/pages/buyer/order/components/Header'
import OrderPersonal from '@/pages/buyer/order/components/Personal'
import OrderGoods from '@/pages/buyer/order/components/Goods'
import OrderRemake from '@/pages/buyer/order/components/Remake'
import OrderFooter from '@/pages/buyer/order/components/Footer'
export default {
  name: 'Order',
  components: {
    OrderHeader,
    OrderPersonal,
    OrderGoods,
    OrderRemake,
    OrderFooter
  }
}
</script>

<style scoped>
  .center{
    width: 100%;
    height: 100%;
    margin-top: .86rem;
    margin-bottom: .86rem;
    background-color: #eeeeee;
  }

</style>
