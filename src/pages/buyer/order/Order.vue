<template>
  <div>
    <order-header></order-header>
    <div class="center">
      <order-personal :personalInfo="personalInfo"></order-personal>
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
import axios from 'axios'
export default {
  name: 'BuyerOrder',
  components: {
    OrderHeader,
    OrderPersonal,
    OrderGoods,
    OrderRemake,
    OrderFooter
  },
  data () {
    return {
      personalInfo: [
        {
          id: '0001',
          name: '王昭君',
          phone: 15899083780,
          address: '广东省深圳市龙岗区坂田街道和成世纪名园小区22栋A单元702室'
        }
      ]
    }
  },
  mounted () {
    axios.post('/buyer/getPersonal', {
      buyer_id: this.sessionStorage.getItem('buyer_login_state')
    }).then((response) => {
      let res = response.data
      if (res.status) {
        
      }
    })
    // this.$store.state.CartItemListGoPay.forEach((item) => {
    //   if (item.sale > 999) {
    //     item.sale = 999 + '+'
    //   }
    // })
    // this.$store.state.CartItemList.forEach((item) => {
    //   if (item.sale > 999) {
    //     item.sale = 999 + '+'
    //   }
    // })
  }
}
</script>

<style scoped>
  .center{
    width: 100%;
    height: 100%;
    margin-top: .86rem;
    margin-bottom: 1rem;
    background-color: #eeeeee;
  }

</style>
