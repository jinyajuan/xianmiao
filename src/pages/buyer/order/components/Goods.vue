<template>
  <div class="goods">
    <ul class="list">
      <li class="item border-bottom">
        <router-link to="/detail">
          <img class="item-img" src="https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp" alt="">
        </router-link>
        <div class="item-info">
          <div class="item-desc">壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 </div>
          <div class="item-count">成交量：1111111</div>
          <div class="item-detail">
            <div class="item-price">￥112.00</div>
            <div class="item-count-change">
              <button class="item-button" >-</button>
              <span class="item-button-counter">1</span>
              <button class="item-button" >+</button>
            </div>
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
  .item-count-change{
    line-height: .44rem;
    margin-top: .16rem;
    /*background-color: darkblue;*/
    font-size: .34rem;
    font-weight: bolder;
    float: right;
  }
  .item-button{
    line-height: .44rem;
    width: .5rem;
    /*margin-top: .16rem;*/
    background-color: red;
    padding: 0 .1rem;
    border-radius: .06rem;
    color: #fff;
    /*float: right;*/
  }
  .item-button-counter{
    width: .5rem;
    line-height: .44rem;
    color: #666666;
  }
  .list-bottom{
    text-align: center;
    line-height: .4rem;
    color: #333333;
  }
  .iconfont{
    display: block;
    width: .5rem;
    text-align: center;
    margin-top: .1rem;
  }
</style>
