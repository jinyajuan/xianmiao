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
          imgUrl: require('@/assets/Images/goodsImg/02a68370ac63938b.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9,
          count: 1,
          checked: false
        }, {
          id: '0002',
          imgUrl: require('@/assets/Images/goodsImg/4a8ca21834ebd25d.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 129,
          price: 30.02,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 3.2,
          count: 1,
          checked: false
        }, {
          id: '0003',
          imgUrl: require('@/assets/Images/goodsImg/4a8ca21834ebd25d.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 999,
          price: 42.00,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.4,
          count: 1,
          checked: false
        }, {
          id: '0004',
          imgUrl: require('@/assets/Images/goodsImg/4a8ca21834ebd25d.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10,
          price: 88.909,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 5.0,
          count: 1,
          checked: false
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
