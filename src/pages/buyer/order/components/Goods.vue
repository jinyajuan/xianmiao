<template>
  <div class="goods">
    <ul class="list" v-for="item of this.$store.state.CartItemListGoPay" :key="item.goods_id">
      <li class="item border-bottom">
        <router-link :to="{path:'/buyer/detail',
                  query: {goods_id: item.goods_id,
                  goods_img: item.goods_img,
                  goods_name:item.goods_name,
                  goods_price: item.goods_price,
                  goods_sale: item.goods_sale,
                  goods_notice: item.goods_notice,
                  goods_score: item.goods_score,
                  goods_checked: item.goods_checked,
                  goods_count: item.goods_count,
                  goods_type: item.goods_type,
                  goods_desc: item.goods_desc}}">
          <img class="item-img" :src="item.goods_img" alt="">
        </router-link>
        <div class="item-info">
          <div class="item-name">{{item.goods_name}}</div>
          <div class="item-sale">单价：￥{{item.goods_price}}</div>
          <div class="item-detail">
            <div class="item-price">￥{{parseFloat((item.goods_price * item.goods_count).toFixed(2))}}</div>
            <div class="item-count">X{{item.goods_count}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OrderGoods',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .goods{
    /*width: 100%;*/
    background-color: #eeeeee;
    padding: .15rem;
  }
  .list{
    padding: .15rem;
    border-radius: .1rem;
    background-color: white;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    /*background-color: red;*/
  }
  input{
    width: .5rem;
    line-height: 1.9rem;
    margin-top: .3rem;
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
  .item-name{
    line-height: .6rem;
    color: #666666;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-sale{
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
  .item-count{
    line-height: .44rem;
    margin-top: .16rem;
    /*background-color: darkblue;*/
    font-size: .3rem;
    float: right;
  }
</style>
