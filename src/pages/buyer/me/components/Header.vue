<template>
  <div class="header">
    <span class="iconfont header-icon" @click="goBack">&#xe64e;</span>
    <span class="header-title">我的设置</span>
  </div>
</template>

<script>
export default {
  name: 'MeHeader',
  methods: {
    goBack () {
      this.$router.go(-1)
      // alert('1')
    }
  }
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
  .iconfont{
    z-index: 99;
    position: absolute;
    line-height: .86rem;
    margin-left: .2rem;
    font-size: .45rem;
    color: white;
  }
  .header-title{
    display: block;
    text-align: center;
    line-height: .86rem;
    font-size: .4rem;
    color: white;
  }

</style>
