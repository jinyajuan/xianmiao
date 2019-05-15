<template>
  <div class="list wrapper" ref="wrapper">
    <!--使用ref定位到当前选中的城市首字母-->
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of this.hotCities" :key="item.id">
            <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) of this.cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {
      city: sessionStorage.getItem('getCityName')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (city) {
      sessionStorage.setItem('getCityName', city)
      this.$router.push('/')
    }
  },
  watch: {
    // 1.此处使用的是监听，监听兄弟组件传过来的值，如果变化则引起下面的变化
    // 2.获取到上面ref中城市首字母的大写字母，this.$refs[this.letter]获取的是一个数组，所以取0项
    // 3.使用better-scroll自动滚到选中的字母上面去
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el)
      }
      // console.log(this.letter)
    }
  }
}
</script>

<style scoped>
  .border-topbottom{
    border-color: #ccc;
  }
  .border-bottom{
    border-color: #ccc;
  }
  .list {
    position: absolute;
    overflow: hidden;
    top: 1.68rem;
    left: 0;
    right: 0;
    bottom: 0;
    /*background-color: green;*/
  }
  .title{
    line-height: .54rem;
    background-color: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
    font-weight: bolder;
  }
  .button-list{
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;
  }
  .button-wrapper{
    width: 33.33%;
    float: left;
  }
  .button{
    margin: .1rem;
    padding: .1rem 0;
    text-align: center;
    border: .02rem solid #ccc;
    border-radius: .06rem;
  }
  .item-list .item{
    line-height: .76rem;
    /*color: #666;*/
    padding-left: .2rem;
  }
</style>
