<template>
  <div class="list">
      <ul>
        <li class="item border-bottom" v-for="(item, index) of this.$store.state.CartItemList" :key="item.id">
          <a href="javascript:;" class="cart_check_box" :checked="item.checked" @click="isSelectSingle(item.checked,index)"></a>
          <router-link to="/buyer/detail">
            <img class="item-img" :src="item.imgUrl" alt="">
          </router-link>
          <div class="item-info">
            <div class="item-desc">{{item.desc}}</div>
            <div class="item-count">成交量：{{item.sale}}</div>
            <div class="item-detail">
              <div class="item-price">￥{{((item.price).toFixed(2) * parseInt(item.count)).toFixed(2)}}</div>
              <div class="item-count-change">
                <button class="item-button" @click="countMinusOrAdd(false,index)">-</button>
                <span class="item-button-counter">{{item.count}}</span>
                <button class="item-button" @click="countMinusOrAdd(true,index)">+</button>
              </div>
            </div>
          </div>
          <span class="iconfont" @click="deleteGoods(index)">&#xe615;</span>
        </li>
        <li class="list-bottom">已经到购物车的底部了</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  data () {
    return {
    }
  },
  methods: {
    countMinusOrAdd (flag, index) {
      this.$emit('countMinusOrAdd', flag, index)
    },
    isSelectSingle (flag, index) {
      this.$emit('isSelectSingle', flag, index)
    },
    deleteGoods (index) {
      this.$emit('deleteGoods', index)
    }
  }
}
</script>

<style scoped>
  .list{
    width: 100%;
    margin-top: .86rem;
    margin-bottom: 2.2rem;
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
  .cart_check_box[checked] {
    background-position: -24px 0;
  }
  .cart_check_box {
    float: left;
    background: url(shop-icon.png) no-repeat;
    -webkit-background-size: 50px 100px;
    /* background-size: 50px 100px; */
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 5px;
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
