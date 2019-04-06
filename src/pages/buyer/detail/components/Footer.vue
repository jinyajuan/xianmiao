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
      </router-link>
    </div>
    <div class="icons-buyer border-right add">
      <span class="iconfont-desc" @click="addCartItemList">加入购物车</span>
    </div>
    <div class="icons-buyer buy">
      <router-link to="/buyer/order">
        <span class="iconfont-desc">立即购买</span>
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
</style>
