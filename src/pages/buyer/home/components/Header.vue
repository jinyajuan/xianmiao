<template>
  <div class="header">
    <div class="header-input" @click="handleSearch">
      <input class="header-input-search" type="text" placeholder="输入商品名称、店铺名称">
    </div>
    <div class="header-right">
      <router-link to="/buyer/city">
        <span>{{this.city}}</span>
        <span class="iconfont">&#xe644;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      city: sessionStorage.getItem('getCityName')
    }
  },
  mounted () {
    console.log(sessionStorage.getItem('getCityName'))
  },
  methods: {
    handleSearch () {
      this.$router.push('/buyer/search')
    }
  }
}
</script>

<style scoped >
  .header{
    display: flex;
    line-height: .86rem;
    background-color: red;
    color: #fff;
  }
  .header-input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    background-color: #fff;
    border-radius: .1rem;
    margin-top: .12rem;
    padding-left: .2rem;
    margin-left: .64rem;
    color: #ccc;
  }
  .header-input-search{
    width: 90%;
    margin-top: -.1rem;
  }
  .header-right{
    min-width: 1.04rem;
    padding: 0 .1rem;
    text-align: center;
    color: #ffffff;
  }
  a{
    color: #fff;
  }
</style>
