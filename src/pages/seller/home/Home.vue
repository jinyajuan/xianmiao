<template>
  <div>
    <home-header></home-header>
    <home-today :TodayList="TodayList"></home-today>
    <home-weekend :WeekendList="WeekendList"></home-weekend>
    <home-last :LastList="LastList"></home-last>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/pages/seller/home/components/Header'
import HomeToday from '@/pages/seller/home/components/Today'
import HomeWeekend from '@/pages/seller/home/components/Weekend'
import HomeLast from '@/pages/seller/home/components/Last'
import HomeFooter from '@/pages/seller/home/components/Footer'
export default {
  name: 'SellerHome',
  data () {
    return {
      TodayList: [
        {
          id: '0001',
          imgUrl: require('@/assets/Images/goodsImg/0e9fac4765fa5609.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '现场抽100位送当地有机农产品2000g,赠运费',
          sale: 0,
          price: 23.11
        }
      ],
      WeekendList: [
        {
          id: '0001',
          imgUrl: require('@/assets/Images/goodsImg/1c1990dce60a9139.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '现场抽100位送当地有机农产品2000g,赠运费',
          sale: 0,
          price: 324.1
        }, {
          id: '0002',
          imgUrl: require('@/assets/Images/goodsImg/1d5507025be86115.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '现场抽100位送当地有机农产品2000g,赠运费',
          sale: 0,
          price: 89.50
        }
      ],
      LastList: [
        {
          id: '0001',
          imgUrl: require('@/assets/Images/goodsImg/1ed00eb400f6b6f3.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '现场抽100位送当地有机农产品2000g,赠运费',
          sale: 0,
          price: 17.1
        }, {
          id: '0002',
          imgUrl: require('@/assets/Images/goodsImg/1f37e84831c20cc9.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '现场抽100位送当地有机农产品2000g,赠运费',
          sale: 0,
          price: 224.1
        }, {
          id: '0003',
          imgUrl: require('@/assets/Images/goodsImg/1ed00eb400f6b6f3.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '现场抽100位送当地有机农产品2000g,赠运费',
          sale: 0,
          price: 90.12
        }, {
          id: '0004',
          imgUrl: require('@/assets/Images/goodsImg/1ed00eb400f6b6f3.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '现场抽100位送当地有机农产品2000g,赠运费',
          sale: 0,
          price: 30.55
        }
      ]
    }
  },
  components: {
    HomeHeader,
    HomeToday,
    HomeWeekend,
    HomeLast,
    HomeFooter
  }
}
</script>

<style scoped>

</style>
