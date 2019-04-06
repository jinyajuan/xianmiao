<template>
    <div class="banner">
        <img class="banner-img" :src="this.$route.query.imgUrl" alt="">
        <div class="banner-info">
          <div class="banner-title"></div>
          <div class="banner-number"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style scoped>
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 60%;
    margin-top: .86rem;
  }
  .banner-img{
    width: 100%;
    margin-top: -1rem;
  }
  .banner-info{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #ffffff;
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8));
  }
  .banner-title{
    flex: 1;
    font-size: .32rem;
    padding: 0 .2rem;
  }
  .banner-number{
    margin: .14rem .1rem 0 0;
    height: .42rem;
  }
</style>
