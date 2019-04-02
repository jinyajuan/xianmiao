<template>
  <div class="list">
    <ul>
      <router-link to="/detail">
        <li class="item border-bottom border-rightbottom" v-for="item of GoodsListItem" :key="item.id">
          <div class="item-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="item-desc">{{item.name}}</p>
          <div>
            <p class="item-price">￥{{item.price.toFixed(2)}}</p>
            <p class="item-count">{{item.sale}}份</p>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props: {
    GoodsListItem: Array
  },
  data () {
    return {
      saleCount: '0'
    }
  }
}
</script>

<style scoped>
  .list{
    width: 100%;
    margin-top: .86rem;
    /*background-color: #55a532;*/
  }
  .item{
    width: 50%;
    /*height: 0;*/
    /*padding-bottom: 70%;*/
    float: left;
    overflow: hidden;
    margin-bottom: 1.2rem;
    /*background-color: #ee9900;*/
    /*margin-bottom: .12rem;*/
  }
  .item-img{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    /*background-color: #25a4bb;*/
  }
  .item-img img{
    width: 100%;
    overflow: hidden;
  }
  .item-desc{
    line-height: .7rem;
    color: #666666;
    font-size: .32rem;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-price{
    line-height: .7rem;
    text-align: center;
    float: left;
    width: 40%;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    color: red;
    font-size: .34rem;
    font-weight: bolder;
  }
  .item-count{
    line-height: .7rem;
    float: right;
    width: 50%;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    text-align: right;
    color: #666666;
    font-size: .3rem;
    padding-right: .16rem;
  }
</style>
