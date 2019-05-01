<template>
  <div class="center">
    <ul class="all">
      <li class="order-item border-bottom" v-for="(item) in orderInfoManage" :key="item.create_time">
        <router-link :to="{path:'/admin/orderInfo',query: {
          create_time: item.create_time,
          user_id: item.user_id,
          user_name: item.user_name,
          user_identify: item.user_identify,
          user_phone: item.user_phone,
          shop_name: item.shop_name,
          shop_address: item.shop_address,
          goods_id: item.goods_id,
          goods_img: item.goods_img,
          goods_price: item.goods_price,
          goods_count: item.goods_count,
          goods_name: item.goods_name,
          goods_desc: item.goods_desc,
          goods_notice: item.goods_notice,
          goods_score: item.goods_score,
          goods_sale: item.goods_sale,
          goods_checked: item.goods_checked,
          goods_type: item.goods_type,
          buyer_id: item.buyer_id,
          buyer_name: item.buyer_name,
          buyer_address: item.buyer_address,
          buyer_phone: item.buyer_phone,
          goods_total_price: item.goods_total_price,
          buyer_remake: item.buyer_remake}}">
          <span>订单Id:{{item.create_time}}</span>
          <span>，商品名称:{{item.goods_name}}</span>
          <span>，商品价格:{{item.goods_price}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'OrderCenter',
  data () {
    return {
      orderInfoManage: []
    }
  },
  mounted () {
    axios.post('/admin/orderManage', {

    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        // alert(res.msg)
        this.orderInfoManage = res.result
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
