<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperOption="swiperOption" :swiperList="swiperList"></home-swiper>
    <home-icons :IconsList="IconsList"></home-icons>
    <home-recommond :RecommondGoodsItemList="RecommondGoodsItemList"></home-recommond>
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
      RecommondGoodsItemList: [],
      RecommondItemList: [],
      RecommondGoodsItem2: []
    }
  },
  mounted () {
    // 获取低价商品
    axios.post('/buyer/getMinimumPrice', {

    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
      // console.log(res.result)
        for (var i = 0; i < res.result.length; i++) {
          this.minimumPriceList.push(res.result[i])
        }
      }
    })

    // 获取推荐的商品
    // 1.判断用户是否登录
    //    1.1如果没有登录，使用系统默认推荐（销量最高，评分最高，价钱最低）
    //    1.2如果已经登录，判断该用户的历史搜索记录是否为空
    //       1.2.1如果该用户的历史搜索记录为空（即初次注册后登录）,使用系统默认推荐（销量最高，评分最高，价钱最低）
    //       1.2.2如果该用户的历史搜索记录不为空
    //         1.2.2.1 使用历史搜索记录取查找数据库的内容（ID），即匹配ID，unshift进数组A
    //           1.2.2.1 使用用户身份查找数据库内默认推荐ID，push进数组A
    //             1.2.2.1 A数组去重，然后使用新的ID数组取查找所有商品信息
    if (sessionStorage.getItem('buyer_login_state') !== null) {
      // 检查搜索记录
      axios.post('/buyer/searchHistory', {
        buyer_id: sessionStorage.getItem('buyer_login_state')
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          // 判断历史记录是否为空，如果为空，使用默认推荐，如果不为空，推荐搜索记录的推荐商品信息
          if (res.result.length === 0) {
            axios.post('/buyer/getRecommondItem', {

            }).then((response) => {
              let res = response.data
              if (res.status === 0) {
                this.RecommondGoodsItemList = res.result
              }
            })
          } else {
            axios.post('/buyer/getUserRecommendItem', {
              buyer_id: sessionStorage.getItem('buyer_login_state')
            }).then((response) => {
              let res = response.data
              if (res.status === 0) {
                // console.log(res.arr)
                for (let i = 0; i < res.arr.length; i++) {
                  this.RecommondItemList.unshift(res.arr[i])
                }
                // 查找所有商品ID
                axios.post('/buyer/getRecommondItemID', {

                }).then((response) => {
                  let res = response.data
                  if (res.status === 0) {
                    // console.log(res.result)
                    for (let j = 0; j < res.result.length; j++) {
                      this.RecommondItemList.push(res.result[j].goods_id)
                      // console.log(res.result[j].goods_id)
                    }
                    // ID 数组去重
                    this.RecommondGoodsItem2 = Array.from(new Set(this.RecommondItemList))
                    // console.log(this.RecommondGoodsItem2)
                    axios.post('/buyer/getRecommendGoodsInfo', {
                      goods_ids: this.RecommondGoodsItem2
                    }).then((response) => {
                      let res = response.data
                      if (res.status === 0) {
                        this.RecommondGoodsItemList = res.arr
                      }
                      // console.log(this.RecommondGoodsItemList)
                    })
                  }
                })
              }
            })
          }
        }
      })
    } else { // 没有登录,直接取默认的系统推荐
      axios.post('/buyer/getRecommondItem', {

      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          this.RecommondGoodsItemList = res.result
        }
      })
    }

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

  }
}
</script>

<style scoped>

</style>
