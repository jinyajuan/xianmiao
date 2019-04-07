<template>
  <div class="goods-detail">
    <div class="name">{{this.$route.query.name}}</div>
    <div class="detail">
      <p class="price">￥{{this.$route.query.price}}</p>
      <p class="count">销量：{{this.$route.query.sale}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice'
}
</script>

<style scoped>
  .goods-detail{
    margin: 0 auto;
    width: 95%;
    /*background-color: #ee9900;*/
  }
  .name{
    line-height: .6rem;
    color: #666666;
    font-size: .34rem;
    font-weight: bold;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .detail{
    height: .76rem;
    /*background-color: #25a4bb;*/
  }
  .price{
    font-size: .4rem;
    color: red;
    font-weight: bolder;
    float: left;
    line-height: .76rem;
  }
  .count{
    font-size: .32rem;
    color: #cccccc;
    float: right;
    line-height: .76rem;
  }
</style>
