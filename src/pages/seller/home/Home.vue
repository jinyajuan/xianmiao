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
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 0,
          price: 34.1
        }
      ],
      WeekendList: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 2,
          price: 34.1
        }, {
          id: '0002',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 341,
          price: 34.02
        }
      ],
      LastList: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 21,
          price: 34.1
        }, {
          id: '0002',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 1341,
          price: 34.02
        }, {
          id: '0003',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 2122,
          price: 34.1
        }, {
          id: '0004',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 111,
          price: 34.02
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
