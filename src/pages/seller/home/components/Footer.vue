<template>
  <div class="footer">
    <div class="icons">
      <router-link :to="{path: '/seller/home', query:{user_id: this.$route.query.user_id}}">
        <span class="iconfont">&#xe607;</span>
        <span class="iconfont-desc">全部商品</span>
      </router-link>
    </div>
    <div class="icons">
      <router-link :to="{path: '/seller/order', query:{user_id: this.$route.query.user_id}}">
        <span class="iconfont">&#xe689;</span>
        <span class="iconfont-desc">我的订单</span>
      </router-link>
    </div>
    <div class="icons">
      <router-link :to="{path: '/seller/upload', query:{user_id: this.$route.query.user_id}}">
        <span class="iconfont">&#xe61b;</span>
        <span class="iconfont-desc">今日上新</span>
      </router-link>
    </div>
    <div class="icons">
      <router-link :to="{path: '/seller/info', query:{user_id: this.$route.query.user_id}}">
        <span class="iconfont">&#xe658;</span>
        <span class="iconfont-desc">信息管理</span>
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
