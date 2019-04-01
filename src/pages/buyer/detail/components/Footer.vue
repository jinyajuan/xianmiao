<template>
  <div class="footer border-top">
    <div class="icons-icon border-right">
      <router-link to="/">
       <span class="iconfont">&#xe607;</span>
      </router-link>
    </div>
    <div class="icons-icon border-right">
      <router-link to="/goods">
        <span class="iconfont">&#xe689;</span>
      </router-link>
    </div>
    <div class="icons-buyer border-right add">
      <router-link to="/cart">
        <span class="iconfont-desc">加入购物车</span>
      </router-link>
    </div>
    <div class="icons-buyer buy">
      <span class="iconfont-desc">立即购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailFooter'
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
