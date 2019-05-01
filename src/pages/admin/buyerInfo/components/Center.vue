<template>
  <div class="center">
    <ul class="all">
      <li class="order-item border-bottom">
        <span class="title">用户Id:</span>
        <span>{{this.$route.query.buyer_id}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">收件人姓名:</span>
        <span>{{this.$route.query.buyer_name}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">联系电话:</span>
        <span>{{this.$route.query.buyer_phone}}</span>
      </li>
      <li class="order-item border-bottom">
        <span class="title">收货地址:</span>
        <span>{{this.$route.query.buyer_address}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BuyerInfoCenter'
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
