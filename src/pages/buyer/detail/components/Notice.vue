<template>
  <div class="notice">
    <div class="notice-left">
      <div class="iconfont notice-left-icon">&#xe613;</div>
    </div>
    <div class="notice-center">
      <marquee behavior="" direction="">{{detailGoods[0].notice}}</marquee>
    </div>
    <div class="notice-right">
      <div class="iconfont notice-right-icon">&#xe604;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailNotice',
  props: {
    detailGoods: Array
  }
}
</script>

<style scoped>
  .notice{
    display: flex;
    width: 100%;
    height: .76rem;
    line-height: .76rem;
    margin-top: .2rem;
    font-size: .32rem;
    background: #facfff;
    color: #ff5388;
  }
  .notice-left{
    width: .64rem;
    float: left;
    /*background: red;*/
  }
  .notice-left-icon {
    text-align: center;
    font-size: .4rem;
    transform: rotateY(180deg);
  }
  .notice-center{
    flex: 1;
    /*background: blue;*/
  }
  .notice-right{
    width: .64rem;
    float: right;
    text-align: center;
    /*background: lawngreen;*/
  }
  .notice-right-icon{
    /*background-color: lawngreen;*/
    text-align: center;
    font-size: .32rem;
  }
</style>
