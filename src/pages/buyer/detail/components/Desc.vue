<template>
  <div class="desc">
    <div class="desc-title border-bottom">详情展示</div>
    <div class="desc-content">{{detailGoods[0].desc}}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailDesc',
  props: {
    detailGoods: Array
  }
}
</script>

<style scoped>
  .desc{
    width: 96%;
    margin: 0 auto 1rem;
    /*background-color: #25a4bb;*/
  }
  .desc-title{
    width: 100%;
    line-height: .7rem;
    font-size: .34rem;
    color: #333333;
    font-weight: bolder;
  }
  .desc-content{
    font-size: .30rem;
    text-indent: .4rem;
    line-height: .4rem;
    color: #666666;
  }

</style>
