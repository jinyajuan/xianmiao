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
import axios from 'axios'
export default {
  name: 'SellerHome',
  data () {
    return {
      user_id: '',
      TodayList: [],
      WeekendList: [],
      LastList: [],
      upload_goods_day: '',
      one_day: '',
      seven_day: '',
      now_time: ''
    }
  },
  components: {
    HomeHeader,
    HomeToday,
    HomeWeekend,
    HomeLast,
    HomeFooter
  },
  methods: {
    getTime (shijianchuo, day) {
      return shijianchuo + 1000 * 60 * 60 * 24 * day
    }
  },
  mounted () {
    axios.post('/users/sellerHomeGoods', {
      user_id: this.$route.query.user_id
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        // alert(res.msg)
        // console.log('---------------后台数据-------------')
        // console.log(res.result)

        for (var i = 0; i < res.result.length; i++) {
          this.upload_goods_day = Number(res.result[i].goods_id) // 获取上传商品当天的时间戳
          this.one_day = this.getTime(this.upload_goods_day, 1) // 获取查询当天的时间
          this.seven_day = this.getTime(this.upload_goods_day, 7) // 获取查询当天7日的时间
          this.now_time = (new Date()).getTime()

          if (this.now_time >= this.upload_goods_day && this.now_time <= this.one_day) {
            this.TodayList.unshift(res.result[i])
          } else if (this.now_time > this.one_day && this.now_time <= this.seven_day) {
            this.WeekendList.unshift(res.result[i])
          } else {
            this.LastList.unshift(res.result[i])
          }
        }
        // console.log('--------------------父组件----------------')
        // console.log(this.TodayList)
        // console.log(this.WeekendList)
        // console.log(this.LastList)
      } else {
        console.log('获取失败')
      }
    })
  }
}
</script>

<style scoped>

</style>
