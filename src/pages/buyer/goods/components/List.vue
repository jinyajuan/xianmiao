<template>
  <div class="list">
    <div class="change-box border-bottom">
      <span  v-for="(item, index) of tabList" :key="item.id" class="change"
             @click="switchTab(index)"
      >{{item.tab}}</span>
    </div>
    <ul class="info-session">
      <li class="item border-bottom border-rightbottom" v-for="item of allGoodsType" :key="item.goods_id">
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
          <div class="item-img">
            <img :src="item.goods_img" alt="">
          </div>
          <p class="item-desc">{{item.goods_name}}</p>
          <div>
            <p class="item-price">￥{{item.goods_price}}</p>
            <p class="item-count">{{item.goods_sale}}份</p>
          </div>
        </router-link>
      </li>
      <li class="noGoodsTip" v-if="has_no_allGoodsType">暂无此类商品</li>
    </ul>
    <ul class="info-session" v-bind:class="{active:isActive}">
      <li class="item border-bottom border-rightbottom" v-for="item of fruitType" :key="item.goods_id">
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
          <div class="item-img">
            <img :src="item.goods_img" alt="">
          </div>
          <p class="item-desc">{{item.goods_name}}</p>
          <div>
            <p class="item-price">￥{{item.goods_price}}</p>
            <p class="item-count">{{item.goods_sale}}份</p>
          </div>
        </router-link>
      </li>
      <li class="noGoodsTip" v-if="has_no_fruitType">暂无此类商品</li>
    </ul>
    <ul class="info-session" v-bind:class="{active:isActive}">
      <li class="item border-bottom border-rightbottom" v-for="item of vegetablesType" :key="item.goods_id">
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
          <div class="item-img">
            <img :src="item.goods_img" alt="">
          </div>
          <p class="item-desc">{{item.goods_name}}</p>
          <div>
            <p class="item-price">￥{{item.goods_price}}</p>
            <p class="item-count">{{item.goods_sale}}份</p>
          </div>
        </router-link>
      </li>
      <li class="noGoodsTip" v-if="has_no_vegetablesType">暂无此类商品</li>
    </ul>
    <ul class="info-session" v-bind:class="{active:isActive}">
      <li class="item border-bottom border-rightbottom" v-for="item of meatType" :key="item.goods_id">
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
          <div class="item-img">
            <img :src="item.goods_img" alt="">
          </div>
          <p class="item-desc">{{item.goods_name}}</p>
          <div>
            <p class="item-price">￥{{item.goods_price}}</p>
            <p class="item-count">{{item.goods_sale}}份</p>
          </div>
        </router-link>
      </li>
      <li class="noGoodsTip" v-if="has_no_meatType">暂无此类商品</li>
    </ul>
    <ul class="info-session" v-bind:class="{active:isActive}">
      <li class="item border-bottom border-rightbottom" v-for="item of beanType" :key="item.goods_id">
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
          <div class="item-img">
            <img :src="item.goods_img" alt="">
          </div>
          <p class="item-desc">{{item.goods_name}}</p>
          <div>
            <p class="item-price">￥{{item.goods_price}}</p>
            <p class="item-count">{{item.goods_sale}}份</p>
          </div>
        </router-link>
      </li>
      <li class="noGoodsTip" v-if="has_no_beanType">暂无此类商品</li>
    </ul>
    <ul class="info-session" v-bind:class="{active:isActive}">
      <li class="item border-bottom border-rightbottom" v-for="item of eggType" :key="item.goods_id">
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
          <div class="item-img">
            <img :src="item.goods_img" alt="">
          </div>
          <p class="item-desc">{{item.goods_name}}</p>
          <div>
            <p class="item-price">￥{{item.goods_price}}</p>
            <p class="item-count">{{item.goods_sale}}份</p>
          </div>
        </router-link>
      </li>
      <li class="noGoodsTip" v-if="has_no_eggType">暂无此类商品</li>
    </ul>
    <ul class="info-session" v-bind:class="{active:isActive}">
      <li class="item border-bottom border-rightbottom" v-for="item of otherType" :key="item.goods_id">
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
          <div class="item-img">
            <img :src="item.goods_img" alt="">
          </div>
          <p class="item-desc">{{item.goods_name}}</p>
          <div>
            <p class="item-price">￥{{item.goods_price}}</p>
            <p class="item-count">{{item.goods_sale}}份</p>
          </div>
        </router-link>
      </li>
      <li class="noGoodsTip" v-if="has_no_otherType">暂无此类商品</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      isActive: true,
      tabList: [
        {
          id: '0001',
          tab: '全部'
        },
        {
          id: '0002',
          tab: '水果'
        },
        {
          id: '0003',
          tab: '蔬菜'
        }, {
          id: '0004',
          tab: '肉类'
        }, {
          id: '0005',
          tab: '豆类'
        }, {
          id: '0006',
          tab: '蛋类'
        }, {
          id: '0007',
          tab: '其他'
        }
      ],
      has_no_allGoodsType: false,
      has_no_fruitType: false,
      has_no_vegetablesType: false,
      has_no_meatType: false,
      has_no_beanType: false,
      has_no_eggType: false,
      has_no_otherType: false
    }
  },
  props: {
    allGoodsType: Array,
    fruitType: Array,
    vegetablesType: Array,
    meatType: Array,
    beanType: Array,
    eggType: Array,
    otherType: Array
  },
  mounted () {
    this.change = document.querySelectorAll('.change')
    this.change[0].style.color = 'red'
  },
  updated () {
    if (this.allGoodsType.length === 0) {
      this.has_no_allGoodsType = true
    }
    if (this.fruitType.length === 0) {
      this.has_no_fruitType = true
    }
    if (this.vegetablesType.length === 0) {
      this.has_no_vegetablesType = true
    }
    if (this.meatType.length === 0) {
      this.has_no_meatType = true
    }
    if (this.beanType.length === 0) {
      this.has_no_beanType = true
    }
    if (this.eggType.length === 0) {
      this.has_no_eggType = true
    }
    if (this.otherType.length === 0) {
      this.has_no_otherType = true
    }
    // console.log('----子组件数组-----')
    // console.log(this.fruitType.length)
    // console.log(this.vegetablesType.length)
    // console.log(this.meatType.length)
    // console.log(this.beanType.length)
    // console.log(this.eggType.length)
    // console.log(this.otherType.length)
  },
  methods: {
    switchTab (index) {
      this.tabCardCollection = document.querySelectorAll('.info-session')
      this.change = document.querySelectorAll('.change')
      for (var i = 0; i < this.tabList.length; i++) {
        if (i !== index) {
          this.tabCardCollection[i].style.display = 'none'
          this.change[i].style.color = ''
        } else {
          this.tabCardCollection[i].style.display = 'block'
          this.change[i].style.color = 'red'
        }
      }
    }
  }
}
</script>

<style scoped>
  .list{
    width: 100%;
    /*background-color: #ee9900;*/
    margin: 1.46rem 0 1rem 0;
  }
  .info-session{
    overflow: hidden;
  }
  .item{
    width: 50%;
    /*height: 0;*/
    /*padding-bottom: 70%;*/
    float: left;
    overflow: hidden;
    /*margin-bottom: 1.2rem;*/
    /*background-color: #ee9900;*/
    /*margin-bottom: .12rem;*/
  }
  .item-img{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    /*background-color: #25a4bb;*/
  }
  .item-img img{
    width: 100%;
    overflow: hidden;
  }
  .item-desc{
    line-height: .7rem;
    color: #666666;
    font-size: .32rem;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-price{
    line-height: .7rem;
    text-align: center;
    float: left;
    width: 40%;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    color: red;
    font-size: .34rem;
    font-weight: bolder;
  }
  .item-count{
    line-height: .7rem;
    float: right;
    width: 50%;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    text-align: right;
    color: #666666;
    font-size: .3rem;
    padding-right: .16rem;
  }
  .active{
    display: none;
  }
  .change-box{
    /*width: 90%;*/
    z-index: 99;
    position: fixed;
    top: .86rem;
    left: 0;
    right: 0;
    margin: 0 auto .2rem;
    display: flex;
    justify-content: space-around;
    background-color: white;
  }
  .change{
    /*width: 1rem;*/
    height: .6rem;
    line-height: .6rem;
    font-size: .3rem;
    color: #333333;
  }
  .noGoodsTip{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    color: #333333;
    font-size: .38rem;
    text-align: center;
  }
</style>
