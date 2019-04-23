<template>
  <div class="center">
    <div class="item1 border-bottom">
      <router-link :to="{path:'/buyer/detail',
                  query: {goods_id: orderDetailList.goods_id,
                  goods_img: orderDetailList.goods_img,
                  goods_name:orderDetailList.goods_name,
                  goods_price: orderDetailList.goods_price,
                  goods_sale: orderDetailList.goods_sale,
                  goods_notice: orderDetailList.goods_notice,
                  goods_score: orderDetailList.goods_score,
                  goods_checked: orderDetailList.goods_checked,
                  goods_count: orderDetailList.goods_count,
                  goods_type: orderDetailList.goods_type,
                  goods_desc: orderDetailList.goods_desc}}">
        <img class="item-img" :src="orderDetailList.goods_img" alt="">
      </router-link>
      <div class="item-info">
        <div class="item-desc" :title="orderDetailList.goods_name">{{orderDetailList.goods_name}}</div>
        <div class="item-count">数量：{{orderDetailList.goods_count}}份</div>
        <div class="item-detail">
          <div class="item-price">单价：￥{{orderDetailList.goods_price}}</div>
        </div>
      </div>
    </div>

    <div class="item border-bottom">
      <p class="title">订单编号：</p>
      <p class="content" :title="orderDetailList.create_time">{{orderDetailList.create_time}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">购买时间：</p>
      <p class="content">{{create_data}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品编号：</p>
      <p class="content" :title="orderDetailList.goods_id">{{orderDetailList.goods_id}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">总价：</p>
      <p class="content" :title="orderDetailList.goods_total_price">{{orderDetailList.goods_total_price}}元</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品描述：</p>
      <p class="content" :title="orderDetailList.goods_desc">{{orderDetailList.goods_desc}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">活动公告：</p>
      <p class="content" :title="orderDetailList.goods_notice">{{orderDetailList.goods_notice}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品评分：</p>
      <p class="content" :title="orderDetailList.goods_score">{{orderDetailList.goods_score}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品销量：</p>
      <p class="content" :title="orderDetailList.goods_sale">{{orderDetailList.goods_sale}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">订单状态：</p>
      <p class="content" :title="orderDetailList.goods_checked">{{orderDetailList.goods_checked}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品类型：</p>
      <p class="content" :title="orderDetailList.goods_type">{{orderDetailList.goods_type}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">收件人：</p>
      <p class="content" :title="orderDetailList.buyer_name">{{orderDetailList.buyer_name}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">收件电话：</p>
      <p class="content" :title="orderDetailList.buyer_phone">{{orderDetailList.buyer_phone}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">收件地址：</p>
      <p class="content" :title="orderDetailList.buyer_address">{{orderDetailList.buyer_address}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">备注信息：</p>
      <p class="content" :title="orderDetailList.buyer_remake">{{orderDetailList.buyer_remake}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">店小二：</p>
      <p class="content" :title="orderDetailList.user_name">{{orderDetailList.user_name}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商家电话：</p>
      <p class="content" :title="orderDetailList.user_phone">{{orderDetailList.user_phone}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">店铺名称：</p>
      <p class="content" :title="orderDetailList.shop_name">{{orderDetailList.shop_name}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商家地址：</p>
      <p class="content" :title="orderDetailList.shop_address">{{orderDetailList.shop_address}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'OrderDetailCenter',
  data () {
    return {
      orderDetailList: [],
      goodsType: ['全部', '水果', '蔬菜', '肉制品', '豆制品', '蛋类', '其他'],
      goodsAccept: ['未接单', '已接单'],
      create_data: ''
    }
  },
  methods: {
    add0 (m) {
      return m < 10 ? '0' + m : m
    },
    format (shijianchuo) { // shijianchuo是整数，否则要parseInt转换
      var time = new Date(parseInt(shijianchuo))
      var y = time.getFullYear()
      var m = time.getMonth() + 1
      var d = time.getDate()
      var h = time.getHours()
      var mm = time.getMinutes()
      var s = time.getSeconds()
      return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s)
    }
  },
  mounted () {
    axios.post('/buyer/getOrderDetail', {
      create_time: this.$route.query.create_time
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        this.orderDetailList = res.result[0]

        this.orderDetailList.goods_type = this.goodsType[res.result[0].goods_type]
        this.orderDetailList.goods_checked = this.goodsAccept[res.result[0].goods_checked]
        this.create_data = this.format(this.orderDetailList.create_time)
        // console.log(this.orderDetailList)
        // console.log(this.create_data)
        // alert(res.msg)
      }
    })
  }
}
</script>

<style scoped>
  .center{
    margin: 1rem .2rem 2rem;
  }
  .item{
    height: .86rem;
    line-height: .86rem;
    font-size: .34rem;
    overflow: hidden;
  }
  .title{
    float: left;
    /*display: inline-block;*/
    width: 2rem;
    /*background: #ee9900;*/
  }
  .content {
    /*float: left;*/
    flex: 1;
    /*display: inline-block;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item1{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    /*background-color: red;*/
  }
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
    /*background-color: green;*/
  }
  .item-desc{
    line-height: .6rem;
    color: #666666;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-count{
    line-height: .5rem;
    font-size: .28rem;
    color: #cccccc;
    /*background-color: yellow;*/
  }
  .item-detail{
    line-height: .6rem;
    color: #ccc;
    /*background-color: fuchsia;*/
  }
  .item-price{
    line-height: .44rem;
    margin-top: .16rem;
    /*background-color: lightcoral;*/
    color: red;
    font-size: .34rem;
    font-weight: bolder;
    float: left;
  }

</style>
