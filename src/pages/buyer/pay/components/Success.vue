<template>
  <div class="success">
    <span class="iconfont">&#xe694;</span>
    <span class="success-word">支付成功</span>
  </div>
</template>

<script>
export default {
  name: 'PaySuccess'
}
</script>

<style scoped>
  .success{
    position: fixed;
    top: .86rem;
    bottom: .86rem;
    left: 0;
    right: 0;
    text-align: center;
  }
  .iconfont{
    display: block;
    margin-top: 3rem;
    font-size: 1rem;
    color: red;
  }
  .success-word{
    display: block;
    margin-top: .2rem;
    font-size: .4rem;
    color: red;
  }
</style>
