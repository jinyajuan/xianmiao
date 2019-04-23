<template>
  <div class="center">
    <ul>
      <li class="order-item border-bottom" v-for="item of orderList" :key="item.create_time">
        <router-link :to="{path: '/buyer/orderDetail', query: {create_time:item.create_time}}" >
          <span>订单编号:{{item.create_time}},</span>
          <span>商品名称:{{item.goods_name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HistoryCenter',
  props: {
    orderList: Array
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
    padding: 0 .2rem;
    line-height: .6rem;
    font-size: .3rem;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>
