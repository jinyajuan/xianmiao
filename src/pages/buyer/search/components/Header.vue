<template>
  <div class="header">
    <div>
      <span class="iconfont header-icon" @click="goBack">&#xe64e;</span>
    </div>
    <div class="header-input">
      <input class="header-input-search" type="text" placeholder="输入商品名称、店铺名称" ref="search">
      <span class="iconfont" @click="search">&#xe617;</span>
    </div>
    <div class="header-right">
      <span>筛选</span>
      <span class="iconfont">&#xe644;</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchHeader',
  methods: {
    goBack () {
      this.$router.go(-1)
      this.$store.state.historyOrSearch = false
      this.$store.state.searchGoodsList = []
    },
    search () {
      this.$store.state.historyOrSearch = true
      if (this.$refs.search.value === '') {
        alert('请输入关键字')
      } else {
        // 1.插入搜索记录
        axios.post('/buyer/searchRecommend', {
          search_id: new Date().getTime(),
          search_content: this.$refs.search.value,
          buyer_id: sessionStorage.getItem('buyer_login_state')
        }).then((response) => {
          let res = response.data
          if (res.status === 0) {
            // alert(res.msg)
          }
        })

        // 2.搜索关键字商品
        axios.post('/buyer/searchGoods', {
          search_content: this.$refs.search.value
        }).then((response) => {
          let res = response.data
          if (res.status === 0) {
            // console.log('搜索出来的商品')
            this.$store.state.searchGoodsList = res.result
            // console.log(this.$store.state.searchGoodsList)
            // alert(res.msg)
          }
        })
      }
    }
  }
}
</script>

<style scoped >
  .header{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
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
  .header-icon{
    z-index: 99;
    position: absolute;
    line-height: .86rem;
    margin-left: .15rem;
    font-size: .45rem;
    color: white;
  }
</style>
