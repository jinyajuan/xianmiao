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
import axios from 'axios'
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
          iconDesc: '全部商品'
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
      swiperList: [],
      minimumPriceList: [],
      RecommondItemList: []
    }
  },
  mounted () {
    // 获取低价商品
    axios.post('/buyer/getMinimumPrice', {

    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
      // console.log(res.result)
        let length = res.result.length > 6 ? 6 : res.result.length
        for (var i = 0; i < length; i++) {
          this.minimumPriceList.push(res.result[i])
        }
      }
    })
    // 获取推荐的商品
    axios.post('/buyer/getRecommondItem', {
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        // console.log(res.result)
        let length = res.result.length > 5 ? 5 : res.result.length
        for (var i = 0; i < length; i++) {
          this.RecommondItemList.push(res.result[i])
        }
      }
    })

    // 1.如果用户没有登录，则显示数据库的默认推荐（销量最高，价钱最低，评分最高）
    // 2.如果用户已经登录，则根据历史搜索记录来推荐商品（使用模糊查询），后面拼接数据库的默认推荐，这是为了在用户第一次登录没有任何搜索记录的情况下进行推荐
    // if (sessionStorage.getItem('buyer_login_state') === null) {
    //   axios.post('/buyer/getRecommondItem', {
    //
    //   }).then((response) => {
    //     let res = response.data
    //     if (res.status === 0) {
    //       // console.log(res.result)
    //       let length = res.result.length > 5 ? 5 : res.result.length
    //       for (var i = 0; i < length; i++) {
    //         this.RecommondItemList.push(res.result[i])
    //       }
    //     }
    //   })
    // } else {
    //   axios.post('/buyer/getUserRecommendItem', {
    //     buyer_id: sessionStorage.getItem('buyer_login_state')
    //   }).then((response) => {
    //     let res = response.data
    //     if (res.status === 0) {
    //       alert(res.msg)
    //       console.log(res.result1)
    //     }
    //   })
    // }

    // 获取轮播图的商品
    axios.post('/buyer/getSwiper', {

    }).then((response) => {
      let res = response.data
      // console.log(res.status)
      if (res.status === 0) {
        // console.log(res.result)
        let length = res.result.length > 5 ? 5 : res.result.length
        for (var i = 0; i < length; i++) {
          this.swiperList.push(res.result[i])
        }
      }
    })

    console.log(sessionStorage.getItem('buyer_login_state'))
  }
}
</script>

<style scoped>

</style>
