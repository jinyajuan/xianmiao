<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperOption="swiperOption" :swiperList="swiperList"></home-swiper>
    <home-icons :IconsList="IconsList"></home-icons>
    <home-recommond :RecommondItemList="RecommondItemList"></home-recommond>
    <home-minimum :minimumPriceList="minimumPriceList"></home-minimum>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/pages/buyer/home/components/Header'
import HomeSwiper from '@/pages/buyer/home/components/Swiper'
import HomeIcons from '@/pages/buyer/home/components/Icons'
import HomeRecommond from '@/pages/buyer/home/components/Recommond'
import HomeMinimum from '@/pages/buyer/home/components/Minimum'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommond,
    HomeMinimum,
    HomeFooter
  },
  data () {
    return {
      IconsList: [
        {
          id: '0001',
          iconUrl: '&#xe60e;',
          iconDesc: '掌柜推荐'
        }, {
          id: '0002',
          iconUrl: '&#xe60c;',
          iconDesc: '热销水果'
        }, {
          id: '0003',
          iconUrl: '&#xe780;',
          iconDesc: '应季蔬菜'
        }, {
          id: '0004',
          iconUrl: '&#xe611;',
          iconDesc: '特产干货'
        }, {
          id: '0005',
          iconUrl: '&#xe783;',
          iconDesc: '特价专卖'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      },
      swiperList: [
        {id: '0001', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/21179/36/11499/150465/5c90ac27E6cdc009a/cb439ca35b8e0174.jpg'},
        {id: '0002', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/30905/40/6989/94489/5c92f1e1E20cd6446/4c50108faa2aa29e.jpg'},
        {id: '0003', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/19953/24/12057/129445/5c9487fdE3196a98d/495ef242c7852b72.jpg'}
      ],
      minimumPriceList: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.00
        }, {
          id: '0002',
          imgUrl: 'https://img10.360buyimg.com/n7/jfs/t23566/321/2459019300/418458/bf23226e/5b7fad2cN7961426f.jpg',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.05
        }, {
          id: '0003',
          imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/28473/39/11517/753149/5c90b4acE86a5662c/ab810b9167736079.png',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.90
        }, {
          id: '0004',
          imgUrl: 'https://img12.360buyimg.com/n7/jfs/t24637/296/923948809/749862/6eb9a861/5b82b3c0N779a24cc.png',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.09
        }, {
          id: '0005',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.10
        }, {
          id: '0006',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: 34.01
        }
      ],
      RecommondItemList: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 34.1
        }, {
          id: '0002',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 129,
          price: 34.02
        }, {
          id: '0003',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 999,
          price: 34.01
        }, {
          id: '0004',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10,
          price: 34.10
        }
      ]
    }
  },
  mounted () {
    this.RecommondItemList.forEach((item) => {
      if (item.sale > 999) {
        item.sale = 999 + '+'
      }
    })
  }
}
</script>

<style scoped>

</style>
