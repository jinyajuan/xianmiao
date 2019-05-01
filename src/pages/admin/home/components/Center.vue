<template>
  <div class="center">
    <ul class="all">
      <li class="order-item border-bottom" v-for="(item) in buyerInfoManage" :key="item.buyer_id">
        <router-link :to="{path:'/admin/buyerInfo',query: {
          buyer_id: item.buyer_id,
          buyer_name: item.buyer_name,
          buyer_phone: item.buyer_phone,
          buyer_address: item.buyer_address}}">
          <span>用户名:{{item.buyer_id}}</span>
          <span>，收货人姓名:{{item.buyer_name}}</span>
          <span>，联系电话:{{item.buyer_phone}}</span>
          <span>，寄件地址:{{item.buyer_address}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeCenter',
  data () {
    return {
      buyerInfoManage: []
    }
  },
  mounted () {
    axios.post('/admin/buyerManage', {

    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        // alert(res.msg)
        this.buyerInfoManage = res.result
      }
    })
  }
}
</script>

<style scoped>
  .center{
    width: 100%;
    margin: 1rem 0;
    /*background: orange;*/
  }
  .tab-con ul {
    margin: .2rem .15rem 1rem;
  }
  .order-item{
    height: .6rem;
    line-height: .6rem;
    font-size: .3rem;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iconfont{
    color: red;
    text-align: right;
  }

</style>
