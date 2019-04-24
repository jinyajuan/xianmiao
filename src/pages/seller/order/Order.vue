<template>
  <div>
    <order-header></order-header>
    <order-center :tabContents="tabContents"
                  :tabContentsHasNo="tabContentsHasNo"
                  :tabContentsHasAlready="tabContentsHasAlready"
    ></order-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import OrderHeader from '@/pages/seller/order/components/Header'
import OrderCenter from '@/pages/seller/order/components/Center'
import HomeFooter from '@/pages/seller/home/components/Footer'
import axios from 'axios'
export default {
  name: 'SellerOrder',
  data () {
    return {
      tabContents: [],
      tabContentsHasNo: [],
      tabContentsHasAlready: []
    }
  },
  components: {
    OrderHeader,
    OrderCenter,
    HomeFooter
  },
  mounted () {
    axios.post('/users/getOrder', {
      user_id: this.$route.query.user_id
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        this.tabContents = res.result
        for (let i = 0; i < this.tabContents.length; i++) {
          if (this.tabContents[i].goods_checked === '0') { // 未接单
            this.tabContents[i].goods_checked = false
            this.tabContentsHasNo.push(this.tabContents[i])
          } else { // 已接单
            this.tabContents[i].goods_checked = true
            this.tabContentsHasAlready.push(this.tabContents[i])
          }
        }
        // console.log('-------this.tabContents--------')
        // console.log(this.tabContents[0].goods_checked)
        // alert(res.msg)
      }
    })
  }
}
</script>

<style scoped>

</style>
