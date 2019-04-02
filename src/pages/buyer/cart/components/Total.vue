<template>
  <div class="total border-top">
    <div class="choose-all">
      <a href="javascript:;" class="cart_check_box" :checked="isSelectAll" @click="handleIsSelectAll(isSelectAll)"></a>
      <span class="choose-all-word">全选</span>
    </div>
    <div class="sum">
      <span class="sum-word">合计：￥</span>
      <span class="sum-price">{{parseFloat(totalPrice).toFixed(2)}}</span>
    </div>
    <div class="buy-btn">
      <button @click="goPay">结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartTotal',
  props: {
    totalPrice: Number,
    isSelectAll: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    // 处理全选
    handleIsSelectAll (flag) {
      this.$emit('handleIsSelectAll', !flag)
    },
    goPay () {
      this.$emit('goPay')
    }
  }
}
</script>

<style scoped>
  .total{
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 1rem;
    width: 100%;
    height: .86rem;
    line-height: .86rem;
    /*margin: 0 auto;*/
    background-color: #eeeeee;
  }
  .choose-all{
    width: 1.3rem;
    /*background-color: #55a532;*/
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
  a {
    text-decoration: none;
    color: #666;
  }
  .sum{
    /*background-color: #25a4bb;*/
    width: 3.4rem;
  }
  .sum-word{
    display: block;
    width: 1.3rem;
    float: left;
    /*background-color: #8f4fa5;*/
  }
  .sum-price{
    display: block;
    min-width: 2rem;
    float: left;
    /*background-color: #5a7ea5;*/
  }
  .choose-all-word, .sum{
    color: red;
    font-size: .32rem;
  }
  .buy-btn{
    margin-right: .15rem;
  }
  .buy-btn button{
    width: 1.2rem;
    height: .6rem;
    background-color: red;
    color: white;
    font-size: .38rem;
    border-radius: .5rem;
  }
</style>
