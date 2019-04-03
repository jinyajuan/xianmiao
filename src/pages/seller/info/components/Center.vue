<template>
  <ul class="items">
    <li class="item border-bottom">
      <span class="iconfont sc">&#xe62a;</span>
      <span class="item-desc">我的</span>
    </li>
    <li class="item border-bottom">
      <span class="iconfont pj">&#xe664;</span>
      <span class="item-desc">店铺地址</span>
    </li>
    <li class="item border-bottom">
      <span class="iconfont zh">&#xe621;</span>
      <span class="item-desc"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'InfoCenter'
}
</script>

<style scoped>
  .items{
    width: 100%;
    margin: 1rem 0;
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
