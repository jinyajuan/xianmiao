<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <router-link to="/buyer/detail">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperOption: Object,
    swiperList: Array
  },
  data () {
    return {
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
