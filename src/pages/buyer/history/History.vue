<template>
  <div>
    <history-header></history-header>
    <history-center :orderList="orderList"></history-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HistoryHeader from '@/pages/buyer/history/components/Header'
import HistoryCenter from '@/pages/buyer/history/components/Center'
import HomeFooter from '@/pages/buyer/home/components/Footer'
import axios from 'axios'
export default {
  name: 'BuyerHistory',
  components: {
    HistoryHeader,
    HistoryCenter,
    HomeFooter
  },
  data () {
    return {
      orderList: []
    }
  },
  mounted () {
    axios.post('/buyer/getOrder', {
      buyer_id: sessionStorage.getItem('buyer_login_state')
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        this.orderList = res.result
        // console.log(res.result)
        alert(res.msg)
      }
    })
  }
}
</script>

<style scoped>

</style>
