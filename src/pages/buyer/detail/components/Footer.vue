<template>
  <div class="footer border-top">
    <div class="icons-icon border-right">
      <router-link to="/">
       <span class="iconfont">&#xe607;</span>
      </router-link>
    </div>
    <div class="icons-icon border-right">
      <router-link to="/buyer/cart">
        <span class="iconfont">&#xe61b;</span>
        <span class="goodsCount">{{this.$store.state.CartItemList.length}}</span>
      </router-link>
    </div>
    <div class="icons-buyer border-right add">
      <span class="iconfont-desc" @click="addCartItemList">加入购物车</span>
    </div>
    <div class="icons-buyer buy">
      <router-link to="/buyer/order">
        <span class="iconfont-desc" @click="buyImmediately">立即购买</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailFooter',
  methods: {
    addCartItemList () {
      this.$store.state.CartItemList.push(this.$route.query)
      console.log(this.$store.state.CartItemList)
    },
    buyImmediately () {
      this.$store.state.CartItemListGoPay.push(this.$route.query)
      this.$router.push('/buyer/order')
    }
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  /*background-color: fuchsia;*/
}
.icons-icon{
  width: 20%;
  background-color: #eeeeee;
}
.icons-buyer{
  width: 30%;
}
.add{
  background-color: #333333;
}
.buy{
  background-color: red;
}

.iconfont{
  display: block;
  text-align: center;
  font-size: .5rem;
  line-height: 1rem;
  color: red;
}
.iconfont-desc{
  display: block;
  text-align: center;
  line-height: 1rem;
  color: #ffffff;
}
  .goodsCount{
    z-index: 99;
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
    border-radius: 50%;
    background: red;
    color: white;
    width: .4rem;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
  }
</style>
