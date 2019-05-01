<template>
  <div class="center">
    <ul class="all">
      <li class="order-item border-bottom" v-for="(item) in sellerInfoManage" :key="item.user_id">
        <router-link :to="{path:'/admin/sellerInfo',query: {
          user_id: item.user_id,
          user_name: item.user_name,
          user_phone: item.user_phone,
          user_identify: item.user_identify,
          shop_name: item.shop_name,
          shop_address: item.shop_address}}">
          <span>卖家Id:{{item.user_id}}</span>
          <span>，卖家姓名:{{item.user_name}}</span>
          <span>，联系电话:{{item.user_phone}}</span>
          <span>，店铺名称:{{item.shop_name}}</span>
          <span>，店铺地址:{{item.shop_address}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SellerCenter',
  data () {
    return {
      sellerInfoManage: []
    }
  },
  mounted () {
    axios.post('/admin/sellerManage', {

    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        // alert(res.msg)
        this.sellerInfoManage = res.result
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
