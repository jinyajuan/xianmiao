<template>
  <div class="recommond">
    <div class="recommond-title">
      <div class="recommond-title-left"></div>
      <div class="recommond-title-center">
        <p class="recommond-title-center-top">每日掌柜推荐</p>
        <p class="recommond-title-center-bottom">——健康不容错过——</p>
      </div>
      <div class="recommond-title-right"></div>
    </div>
    <div class="recommond-content">
      <ul>
        <router-link to="/buyer/detail">
          <li class="item border-bottom" v-for="item of RecommondItemList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
              <div class="item-desc">{{item.name}}</div>
              <div class="item-count">成交量：{{item.sale}}份</div>
              <div class="item-detail">
                <div class="item-price">{{item.price.toFixed(2)}}</div>
                <button class="item-button">查看详情</button>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommond',
  props: {
    RecommondItemList: Array
  }
}
</script>

<style scoped>
  .recommond-title{
    width: 100%;
    height: 0;
    padding-bottom: 20%;
    position: relative;
    background-color: #ffbdce;
  }
  .recommond-title-center{
    position: absolute;
    top: .15rem;
    bottom: .15rem;
    left:1.2rem;
    right: 1.2rem;
    border-radius: .1rem;
    background-color: white;
  }
  .recommond-title-center-top{
    text-align: center;
    font-size: .35rem;
    margin-top: .2rem;
    text-shadow: .05rem .05rem  #cccccc;
    color: red;
  }
  .recommond-title-center-bottom{
    text-align: center;
    font-size: .2rem;
    margin-top: .1rem;
    color: #999999;
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
</style>
