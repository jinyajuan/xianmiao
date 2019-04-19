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
  </ul>
</template>

<script>
export default {
  name: 'MeItems',
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
  .item-desc{
    /*line-height: .66rem;*/
    font-size: .32rem;
    color: #666666;
  }

</style>
