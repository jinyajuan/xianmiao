<template>
  <div class="footer">
    <div class="icons" @click="home">
      <span class="iconfont">&#xe607;</span>
      <span class="iconfont-desc">首页</span>
    </div>
    <div class="icons" @click="goods">
      <span class="iconfont">&#xe689;</span>
      <span class="iconfont-desc">商品</span>
    </div>
    <div class="icons" @click="cart">
      <span class="iconfont">&#xe61b;</span>
      <span class="iconfont-desc">购物车</span>
    </div>
    <div class="icons" @click="me">
      <span class="iconfont">&#xe658;</span>
      <span class="iconfont-desc">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  methods: {
    home () {
      this.$router.push('/')
      this.$store.state.CartItemListGoPay = []
      this.$store.state.BuyerRemake = ''
    },
    goods () {
      this.$router.push('/buyer/goods')
      this.$store.state.CartItemListGoPay = []
      this.$store.state.BuyerRemake = ''
    },
    cart () {
      this.$router.push('/buyer/cart')
      this.$store.state.CartItemListGoPay = []
      this.$store.state.BuyerRemake = ''
    },
    me () {
      this.$router.push('/buyer/me')
      this.$store.state.CartItemListGoPay = []
      this.$store.state.BuyerRemake = ''
    }
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  /*height: 1rem;*/
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  /*padding: 0 .4rem;*/
  justify-content: space-between;
}
  .icons{
    width: 20%;
    /*height: 0;*/
    /*background-color: #55a532;*/
    /*padding-bottom: 20%;*/
  }
  .iconfont{
    display: block;
    text-align: center;
    font-size: .5rem;
    margin-top: .1rem;
    color: red;
  }
  .iconfont-desc{
    display: block;
    text-align: center;
    margin-top: .1rem;
    color: #333333;
  }
</style>
