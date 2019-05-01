<template>
  <div class="center">
    <ul class="all">
      <li class="order-item border-bottom">
        <span class="title">卖家Id:</span>
        <span>{{this.$route.query.user_id}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">真实姓名:</span>
        <span>{{this.$route.query.user_name}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">证件号码:</span>
        <span>{{this.$route.query.user_identify}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">联系电话:</span>
        <span>{{this.$route.query.user_phone}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">店铺名称:</span>
        <span>{{this.$route.query.shop_name}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">发货地址:</span>
        <span>{{this.$route.query.shop_address}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SellerInfoCenter'
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
