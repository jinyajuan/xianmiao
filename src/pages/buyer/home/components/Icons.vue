<template>
  <div class="icons">
    <router-link :to="{path:'/buyer/goods',query: {buyer_id: this.$route.query.buyer_id}}">
      <div class="icon" v-for="item of IconsList" :key="item.id">
        <span class="iconfont" v-html="item.iconUrl"></span>
        <span class="desc">{{item.iconDesc}}</span>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    IconsList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .icons{
    width: 100%;
    height: 0;
    padding-bottom: 25%;
    /*background-color: #55a532;*/
  }
  .icon{
    width: 20%;
    height: 0;
    padding-bottom: 25%;
    float: left;
    color: #666666;
  }
  .iconfont{
    display: block;
    margin-top: .2rem;
    /*background-color: yellow;*/
    text-align: center;
    font-size: 0.8rem;
  }
  .desc{
    display: block;
    /*background-color: lightcoral;*/
    text-align: center;
    margin-top: .1rem;
    font-size: .3rem;
    color: #333333;
  }

</style>
