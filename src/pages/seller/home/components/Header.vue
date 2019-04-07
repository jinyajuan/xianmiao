<template>
  <div class="header">
    <span class="header-title">店铺首页</span>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
  .header{
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    right: 0;
    height: .86rem;
    width: 100%;
    background-color: red;
  }
  .header-title{
    display: block;
    text-align: center;
    line-height: .86rem;
    font-size: .4rem;
    color: white;
  }

</style>
