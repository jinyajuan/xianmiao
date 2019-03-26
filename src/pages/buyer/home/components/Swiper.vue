<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      },
      swiperList: [
        {id: '0001', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/21179/36/11499/150465/5c90ac27E6cdc009a/cb439ca35b8e0174.jpg'},
        {id: '0002', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/30905/40/6989/94489/5c92f1e1E20cd6446/4c50108faa2aa29e.jpg'},
        {id: '0003', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/19953/24/12057/129445/5c9487fdE3196a98d/495ef242c7852b72.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
  .swiper >>> .swiper-pagination-bullet-active{
    background-color: red !important;
  }
  .swiper{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
    background-color: #cccccc;
  }
  .swiper-img{
    width: 100%;
  }

</style>
