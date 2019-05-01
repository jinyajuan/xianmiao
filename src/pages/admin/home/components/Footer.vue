<template>
  <div class="footer">
    <div class="icons">
      <router-link :to="{path:'/admin/home'}">
        <span class="iconfont">&#xe61a;</span>
        <span class="iconfont-desc">买家管理</span>
      </router-link>
    </div>
    <div class="icons">
      <router-link :to="{path:'/admin/seller'}">
          <span class="iconfont">&#xe681;</span>
          <span class="iconfont-desc">卖家管理</span>
      </router-link>
    </div>
    <div class="icons">
      <router-link :to="{path:'/admin/order'}">
        <span class="iconfont">&#xe64f;</span>
        <span class="iconfont-desc">订单管理</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
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
