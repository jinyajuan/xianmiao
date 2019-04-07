<template>
  <div>
    <order-header></order-header>
    <div class="center">
      <order-personal :personalInfo="personalInfo"></order-personal>
      <order-goods :orderList="orderList"></order-goods>
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
      ],
      orderList: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          count: 1,
          sale: 1232,
          price: 12.33
        }, {
          id: '0002',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          count: 1,
          sale: 122,
          price: 12
        }
      ]
    }
  },
  mounted () {
    this.orderList.forEach((item) => {
      if (item.sale > 999) {
        item.sale = 999 + '+'
      }
    })
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
