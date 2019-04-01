<template>
  <div class="icons">
    <router-link to="/goods">
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
  data () {
    return {
      IconsList: [
        {
          id: '0001',
          iconUrl: '&#xe60e;',
          iconDesc: '掌柜推荐'
        }, {
          id: '0002',
          iconUrl: '&#xe60c;',
          iconDesc: '热销水果'
        }, {
          id: '0003',
          iconUrl: '&#xe780;',
          iconDesc: '应季蔬菜'
        }, {
          id: '0004',
          iconUrl: '&#xe611;',
          iconDesc: '特产干货'
        }, {
          id: '0005',
          iconUrl: '&#xe783;',
          iconDesc: '特价专卖'
        }
      ]
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
