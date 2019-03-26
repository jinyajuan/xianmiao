<template>
  <div class="header">
    <div class="header-input">
      <input class="header-input-search" type="text" placeholder="输入商品名称、店铺名称">
      <span class="iconfont">&#xe617;</span>
    </div>
    <div class="header-right">
      <span>北京</span>
      <span class="iconfont">&#xe644;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped >
  .header{
    display: flex;
    line-height: .86rem;
    background-color: red;
    color: #fff;
  }
  .header-input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    background-color: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    padding-left: .2rem;
    margin-left: .64rem;
    color: #ccc;
  }
  .header-input-search{
    width: 90%;
    margin-top: -.1rem;
  }
  .header-right{
    min-width: 1.04rem;
    padding: 0 .1rem;
    text-align: center;
    color: #ffffff;
  }
</style>
