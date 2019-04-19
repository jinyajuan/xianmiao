<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.goods_id">
        <router-link :to="{path:'/buyer/detail',
                  query: {goods_id: item.goods_id,
                  goods_img: item.goods_img,
                  goods_name:item.goods_name,
                  goods_price: item.goods_price,
                  goods_sale: item.goods_sale,
                  goods_notice: item.goods_notice,
                  goods_score: item.goods_score,
                  goods_checked: item.goods_checked,
                  goods_count: item.goods_count,
                  goods_type: item.goods_type,
                  goods_desc: item.goods_desc}}">
          <img class="swiper-img" :src="item.goods_img" alt="">
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
