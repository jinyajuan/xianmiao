<template>
  <div class="minimum">
    <div class="minimum-title">
      <div class="minimum-title-left"></div>
      <div class="minimum-title-center">
        <p class="minimum-title-center-top">每日特价</p>
        <p class="minimum-title-center-bottom">————便宜又好吃————</p>
      </div>
      <div class="minimum-title-right"></div>
    </div>
    <div class="minimum-content">
      <ul>
        <li class="item border-bottom border-right" v-for="item of minimumPriceList" :key="item.goods_id">
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
            <div class="item-img">
              <img :src="item.goods_img" alt="">
            </div>
            <p class="item-desc">{{item.goods_name}}</p>
            <p class="item-price">￥{{item.goods_price}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMinimum',
  props: {
    minimumPriceList: Array
  }
}
</script>

<style scoped>
  .minimum{
    width: 100%;
    overflow: hidden;
    margin-bottom: 1.2rem;
  }
  .minimum-title{
    width: 100%;
    height: 0;
    padding-bottom: 20%;
    position: relative;
    background-color: #ffbdce;
  }
  .minimum-title-center{
    position: absolute;
    top: .15rem;
    bottom: .15rem;
    left: 1.2rem;
    right: 1.2rem;
    border-radius: .1rem;
    background-color: white;
  }
  .minimum-title-center-top{
    text-align: center;
    font-size: .35rem;
    margin-top: .2rem;
    text-shadow: .05rem .05rem  #cccccc;
    color: red;
  }
  .minimum-title-center-bottom{
    text-align: center;
    font-size: .2rem;
    margin-top: .1rem;
    color: #999999;
  }

  .item{
    /*width: 100%;*/
    padding-bottom: 50%;
    height: 0;
    width: 32%;
    margin-left: 1%;
    float: left;
    overflow: hidden;
    /*background-color: pink;*/
  }
  .item-img{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    /*background-color: #55a532;*/
  }
  .item-img img{
    width: 100%;
    overflow: hidden;
  }
  .item-desc{
    line-height: .6rem;
    color: #666666;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-price{
    line-height: .4rem;
    text-align: center;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    color: red;
    font-size: .34rem;
    font-weight: bolder;
  }
</style>
