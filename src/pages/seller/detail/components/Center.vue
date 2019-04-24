<template>
  <div class="center">
    <div class="item1 border-bottom">
      <img class="item-img" :src="everyOrderDetailList.goods_img" alt="">
      <div class="item-info">
        <div class="item-desc" :title="everyOrderDetailList.goods_name">{{everyOrderDetailList.goods_name}}</div>
        <div class="item-count">数量：{{everyOrderDetailList.goods_count}}份</div>
        <div class="item-detail">
          <div class="item-price">单价：￥{{everyOrderDetailList.goods_price}}</div>
        </div>
      </div>
    </div>
    <div class="item border-bottom">
      <p class="title">订单编号：</p>
      <p class="content">{{everyOrderDetailList.create_time}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">购买时间：</p>
      <p class="content">{{create_data}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">订单状态：</p>
      <div v-if="!orderAcceptState">
        <span class="content">未接单</span>
        <button class="btn" @click="acceptOrder">确认接单</button>
      </div>
      <div v-else>
        <span class="content">已接单</span>
      </div>
    </div>
    <div class="item border-bottom">
      <p class="title">收件人：</p>
      <p class="content">{{everyOrderDetailList.buyer_name}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">收件电话：</p>
      <p class="content">{{everyOrderDetailList.buyer_phone}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">收件地址：</p>
      <p class="content">{{everyOrderDetailList.buyer_address}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">备注信息：</p>
      <p class="content">{{everyOrderDetailList.buyer_remake}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品编号：</p>
      <p class="content">{{everyOrderDetailList.goods_id}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品描述：</p>
      <p class="content">{{everyOrderDetailList.goods_desc}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">活动公告：</p>
      <p class="content">{{everyOrderDetailList.goods_notice}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品评分：</p>
      <p class="content">{{everyOrderDetailList.goods_score}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品销量：</p>
      <p class="content">{{everyOrderDetailList.goods_sale}}</p>
    </div>
    <div class="item border-bottom">
      <p class="title">商品类型：</p>
      <p class="content">{{everyOrderDetailList.goods_type}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailCenter',
  data () {
    return {
      everyOrderDetailList: [],
      goodsType: ['全部', '水果', '蔬菜', '肉制品', '豆制品', '蛋类', '其他'],
      create_data: '',
      orderAcceptState: ''
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
    },
    acceptOrder () {
      axios.post('/users/acceptOrder', {
        create_time: this.$route.query.create_time
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          alert(res.msg)
          this.orderAcceptState = !(this.everyOrderDetailList.goods_checked)
        }
      })
    }
  },
  mounted () {
    axios.post('/users/getOrderDetail', {
      user_id: this.$route.query.user_id,
      create_time: this.$route.query.create_time
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        this.everyOrderDetailList = res.result[0]
        this.create_data = this.format(this.everyOrderDetailList.create_time)
        this.everyOrderDetailList.goods_type = this.goodsType[res.result[0].goods_type]
        this.everyOrderDetailList.goods_checked = Boolean(this.everyOrderDetailList.goods_checked)
        this.orderAcceptState = this.everyOrderDetailList.goods_checked
        // console.log(this.everyOrderDetailList)
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
  .btn{
    width: 1.8rem;
    height: .5rem;
    border-radius: .2rem;
    background: red;
    color: #ffffff;
  }
</style>
