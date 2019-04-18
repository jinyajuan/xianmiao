<template>
  <div class="weekend border">
    <p class="title border-bottom">一周内上新</p>
    <ul>
      <li class="item border-bottom" v-for="item of WeekendList" :key="item.goods_id">
        <img class="item-img" :src="item.goods_img" alt="">
        <div class="item-info">
          <div class="item-desc">{{item.goods_name}}</div>
          <div class="item-count">成交量：{{item.goods_sale}}份</div>
          <div class="item-detail">
            <div class="item-price">￥{{item.goods_price}}</div>
            <button class="item-button">
              <router-link :to="{path:'/seller/change/',
              query: {goods_id: item.goods_id,
              goods_img: item.goods_img,
              goods_name:item.goods_name,
              goods_price: item.goods_price,
              goods_notice: item.goods_notice,
              goods_desc: item.goods_desc}}">
                点击修改
              </router-link>
            </button>
          </div>
        </div>
      </li>
      <li class="hasNoGoods" :class="{hide: isHide}">暂无上新</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      isHide: false
    }
  },
  props: {
    WeekendList: Array
  },
  updated () {
    if (this.WeekendList.length !== 0) {
      this.isHide = true
    }
  }
}
</script>

<style scoped>
  .weekend{
    width: 100%;
  }
  .title{
    display: block;
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    background-color: #eeeeee;
    font-size: .34rem;
    color: #333333;
  }
  .item{
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
  .item-button{
    line-height: .44rem;
    margin-top: .16rem;
    margin-right: .25rem;
    background-color: #ff9300;
    padding: 0 .1rem;
    border-radius: .06rem;
    color: #fff;
    float: right;
  }
  .hasNoGoods{
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    text-align: center;
    font-size: .32rem;
    color: #333333;
    background-color: #ffffff;
  }
  .hide{
    display: none;
  }
  a{
    color: #ffffff;
  }
</style>
