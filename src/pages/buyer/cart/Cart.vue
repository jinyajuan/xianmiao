<template>
  <div>
    <cart-header></cart-header>
    <cart-list></cart-list>
    <cart-total></cart-total>
    <home-footer></home-footer>
  </div>
</template>

<script>
import CartHeader from '@/pages/buyer/cart/components/Header'
import CartList from '@/pages/buyer/cart/components/List'
import CartTotal from '@/pages/buyer/cart/components/Total'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'Cart',
  components: {
    CartHeader,
    CartList,
    CartTotal,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
