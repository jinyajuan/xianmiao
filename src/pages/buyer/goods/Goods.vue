<template>
  <div>
    <goods-header @goBack="handleGoBack"></goods-header>
    <goods-list :GoodsListItem="GoodsListItem"></goods-list>
    <home-footer></home-footer>
  </div>
</template>

<script>
import GoodsHeader from '@/pages/buyer/goods/components/Header'
import GoodsList from '@/pages/buyer/goods/components/List'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'BuyerGoods',
  components: {
    GoodsHeader,
    GoodsList,
    HomeFooter
  },
  data () {
    return {
      GoodsListItem: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.02,
          sale: 123212
        }, {
          id: '0002',
          imgUrl: 'https://img10.360buyimg.com/n7/jfs/t23566/321/2459019300/418458/bf23226e/5b7fad2cN7961426f.jpg',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.02,
          sale: 21232
        }, {
          id: '0003',
          imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/28473/39/11517/753149/5c90b4acE86a5662c/ab810b9167736079.png',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.012,
          sale: 32
        }, {
          id: '0004',
          imgUrl: 'https://img12.360buyimg.com/n7/jfs/t24637/296/923948809/749862/6eb9a861/5b82b3c0N779a24cc.png',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.102,
          sale: 1222232
        }, {
          id: '0005',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.021,
          sale: 12
        }, {
          id: '0006',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.02,
          sale: 100
        }
      ]
    }
  },
  mounted () {
    this.GoodsListItem.forEach((item) => {
      if (item.sale > 999) {
        item.sale = 999 + '+'
      }
    })
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
