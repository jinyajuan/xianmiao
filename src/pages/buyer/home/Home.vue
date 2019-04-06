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
  name: 'BuyerHome',
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
          imgUrl: require('@/assets/Images/goodsImg/02a68370ac63938b.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }, {
          id: '0002',
          imgUrl: require('@/assets/Images/goodsImg/1c1990dce60a9139.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }, {
          id: '0003',
          imgUrl: require('@/assets/Images/goodsImg/1d5507025be86115.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }, {
          id: '0004',
          imgUrl: require('@/assets/Images/goodsImg/1ed00eb400f6b6f3.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }, {
          id: '0005',
          imgUrl: require('@/assets/Images/goodsImg/1f37e84831c20cc9.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }, {
          id: '0006',
          imgUrl: require('@/assets/Images/goodsImg/2ffeed726882486c.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }
      ],
      RecommondItemList: [
        {
          id: '0001',
          imgUrl: require('@/assets/Images/goodsImg/02a68370ac63938b.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10029,
          price: 12.1,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.9
        }, {
          id: '0002',
          imgUrl: require('@/assets/Images/goodsImg/4a8ca21834ebd25d.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 129,
          price: 30.02,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 3.2
        }, {
          id: '0003',
          imgUrl: require('@/assets/Images/goodsImg/4a8ca21834ebd25d.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 999,
          price: 42.00,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 4.4
        }, {
          id: '0004',
          imgUrl: require('@/assets/Images/goodsImg/4a8ca21834ebd25d.jpg'),
          name: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          sale: 10,
          price: 88.909,
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果',
          notice: '注意：02.01~02.28 [08:00~22:00]内前来购买，可享受买一赠一活动的；数量有限，售完为止。',
          score: 5.0
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
    this.minimumPriceList.forEach((item) => {
      if (item.sale > 999) {
        item.sale = 999 + '+'
      }
    })
  }
}
</script>

<style scoped>

</style>
