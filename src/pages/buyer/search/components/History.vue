<template>
  <div class="history">
    <div class="searchCon" v-if="this.$store.state.historyOrSearch">
      <ul>
        <li v-if="this.$store.state.searchGoodsList.length === 0" class="hanNo">暂无该商品</li>
        <li v-else class="item border-bottom" v-for="item of this.$store.state.searchGoodsList" :key="item.goods_id">
          <img class="item-img" :src="item.goods_img" alt="">
          <div class="item-info">
            <div class="item-desc">{{item.goods_name}}</div>
            <div class="item-count">成交量：{{item.goods_sale}}份</div>
            <div class="item-detail">
              <div class="item-price">{{item.goods_price}}</div>
              <button class="item-button">
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
                  查看详情
                </router-link>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="historyCon" v-else>
      <div style="overflow: hidden">
        <p class="title" style="float: left;">历史搜索</p>
        <p class="iconfont" style="float: right;" @click="delateSearchHistory">&#xe619;</p>
      </div>
      <div>
        <span class="content" v-for="item in historyItem" :key="item.search_id">{{item.search_content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchHistory',
  data () {
    return {
      historyItem: []
    }
  },
  mounted () {
    axios.post('/buyer/searchHistory', {
      buyer_id: sessionStorage.getItem('buyer_login_state')
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        this.historyItem = res.result
      }
    })
  },
  methods: {
    delateSearchHistory () {
      axios.post('/buyer/deteleSearch', {
        buyer_id: sessionStorage.getItem('buyer_login_state')
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          alert(res.msg)
        }
      })
    }
  }
}
</script>

<style scoped>
  .history{
    height: 100%;
    margin-top: .86rem;
    margin-bottom: 1rem;
    /*background-color: #eeeeee;*/
  }
  .historyCon{
    margin: 1.5rem auto;
    width: 96%;
    /*background-color: #DD4A68;*/
  }
  .title {
    font-size: .32rem;
    font-weight: bolder;
  }
  .content{
    background-color: #eeeeee;
    display: inline-block;
    height: .6rem;
    line-height: .6rem;
    border-radius: 3rem;
    margin-right: .3rem;
    margin-top: .15rem;
    /*margin-bottom: .15rem;*/
    padding: 0 .2rem;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    /*background-color: red;*/
  }
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
    /*background-color: green;*/
  }
  .item-desc{
    line-height: .6rem;
    color: #666666;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-count{
    line-height: .5rem;
    font-size: .28rem;
    color: #cccccc;
    /*background-color: yellow;*/
  }
  .item-detail{
    line-height: .6rem;
    color: #ccc;
    /*background-color: fuchsia;*/
  }
  .item-price{
    line-height: .44rem;
    margin-top: .16rem;
    /*background-color: lightcoral;*/
    color: red;
    font-size: .34rem;
    font-weight: bolder;
    float: left;
  }
  .item-button{
    line-height: .44rem;
    margin-top: .16rem;
    margin-right: .25rem;
    background-color: #ff9300;
    padding: 0 .1rem;
    border-radius: .06rem;
    color: #fff;
    float: right;
  }
  a{
    color: white;
  }
  .hanNo{
    text-align: center;
    margin-top: 1.8rem;
    font-size: .38rem;
  }

</style>
