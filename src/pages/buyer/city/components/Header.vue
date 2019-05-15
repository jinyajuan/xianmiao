<template>
  <div class="header">
    <span class="iconfont header-icon" @click="goBack">&#xe64e;</span>
    <span class="header-title">城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    goBack () {
      this.$router.go(-1)
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
<!--<template>-->
  <!--<div class="header">-->
    <!--城市选择-->
    <!--<router-link to="/">-->
      <!--<div class="iconfont header-iconfont">&#xe624;</div>-->
    <!--</router-link>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
  <!--name: 'CityHeader'-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
  <!--.header{-->
    <!--overflow: hidden;-->
    <!--/*position: relative;*/-->
    <!--height: .86rem;-->
    <!--line-height: .86rem;-->
    <!--text-align: center;-->
    <!--color: #ffffff;-->
    <!--background-color: red;-->
    <!--font-size: .32rem;-->
  <!--}-->
  <!--.header-iconfont{-->
    <!--text-align: center;-->
    <!--font-size: .4rem;-->
    <!--width: .64rem;-->
    <!--position: absolute;-->
    <!--top: 0;-->
    <!--left: 0;-->
    <!--color: #fff;-->
  <!--}-->
<!--</style>-->
