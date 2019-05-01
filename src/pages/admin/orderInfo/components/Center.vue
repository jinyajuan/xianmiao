<template>
  <div class="center">
    <ul class="all">
      <li class="order-item border-bottom">
        <span class="title">订单Id:</span>
        <span>{{this.$route.query.create_time}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">创建时间:</span>
        <span>{{create_data}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商品Id:</span>
        <span>{{this.$route.query.goods_id}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">图片链接:</span>
        <span>{{this.$route.query.goods_img}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商品价格:</span>
        <span>{{this.$route.query.goods_price}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">购买数量:</span>
        <span>{{this.$route.query.goods_count}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商品名称:</span>
        <span>{{this.$route.query.goods_name}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">详细描述:</span>
        <span>{{this.$route.query.goods_desc}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商品公告:</span>
        <span>{{this.$route.query.goods_notice}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商品评分:</span>
        <span>{{this.$route.query.goods_score}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">订单状态:</span>
        <span>{{goods_checked}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商品销量:</span>
        <span>{{this.$route.query.goods_sale}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商品分类:</span>
        <span>{{goods_type}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">买家Id:</span>
        <span>{{this.$route.query.buyer_id}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">买家姓名:</span>
        <span>{{this.$route.query.buyer_name}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">买家地址:</span>
        <span>{{this.$route.query.buyer_address}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">买家电话:</span>
        <span>{{this.$route.query.buyer_phone}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">买家备注:</span>
        <span>{{this.$route.query.buyer_remake}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">总价格:</span>
        <span>{{this.$route.query.goods_total_price}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商家Id:</span>
        <span>{{this.$route.query.user_id}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商家姓名:</span>
        <span>{{this.$route.query.user_name}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商家证件号码:</span>
        <span>{{this.$route.query.user_identify}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">商家联系电话:</span>
        <span>{{this.$route.query.user_phone}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">店铺名称:</span>
        <span>{{this.$route.query.shop_name}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">店铺地址:</span>
        <span>{{this.$route.query.shop_address}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OrderInfoCenter',
  data () {
    return {
      create_data: '',
      goods_type: '',
      goodsTypes: ['', '水果', '蔬菜', '肉制品', '豆制品', '蛋类', '其他'],
      goods_checked: '',
      goodsChecked: ['未接单', '已接单']
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
    this.create_data = this.format(this.$route.query.create_time)
    this.goods_type = this.goodsTypes[this.$route.query.goods_type]
    this.goods_checked = this.goodsChecked[this.$route.query.goods_checked]
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
  .title{
    color: #333333;
    margin-left: .2rem;
    width: .5rem;
    font-weight: bolder;
  }
</style>
