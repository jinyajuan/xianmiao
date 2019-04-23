<template>
  <ul class="items">
    <li class="item border-bottom">
      <span class="iconfont sc">&#xe62a;</span>
      <span class="item-desc" @click="handleCollect">收藏</span>
    </li>
    <li class="item border-bottom">
      <span class="iconfont pj">&#xe664;</span>
      <span class="item-desc" @click="handleComment">评价</span>
    </li>
    <li class="item border-bottom" @click="goSwitch">
      <span class="iconfont zh">&#xe621;</span>
      <span class="item-desc">身份转换至卖家</span>
    </li>
    <div v-if="exitLogin">
      <li class="item border-bottom" @click="historyOrder">
        <span class="iconfont dd">&#xe631;</span>
        <span class="item-desc">历史订单</span>
      </li>
      <li class="item border-bottom" @click="exit" >
        <span class="iconfont tc">&#xe64c;</span>
        <span class="item-desc">退出登录</span>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'MeItems',
  data () {
    return {
      exitLogin: false
    }
  },
  mounted () {
    if (sessionStorage.getItem('buyer_login_state') === null) { // 未登录
      this.exitLogin = false
    } else { // 登录成功
      this.exitLogin = true
    }
  },
  methods: {
    goSwitch () {
      this.$emit('goSwitch')
    },
    handleCollect () {
      if (location.hash === '#/buyer/me') {
        alert('请先登录')
      }
    },
    handleComment () {
      if (location.hash === '#/buyer/me') {
        alert('请先登录')
      }
    },
    exit () {
      // 退出登录
      sessionStorage.removeItem('buyer_login_state')
      this.$router.push('/buyer/login')
    },
    historyOrder () {
      this.$router.push('/buyer/history')
    }
  }
}
</script>

<style scoped>
  .items{
    width: 100%;
    /*padding: 0 .5rem;*/
    /*background-color: #25a4bb;*/
  }
  .item{
    height: .66rem;
    line-height: .66rem;
    margin-bottom: .2rem;
    /*background-color: #ee9900;*/
  }
  .iconfont{
    font-size: .5rem;
    margin-right: .4rem;
    margin-left: .4rem;
  }
  .sc{
    color: red;
  }
  .pj{
    color: #feff14;
  }
  .zh{
    color: #44abff;
  }
  .tc{
    color: #ff4aa5;
  }
  .dd{
    color: #d8ff78;
  }
  .item-desc{
    /*line-height: .66rem;*/
    font-size: .32rem;
    color: #666666;
  }

</style>
