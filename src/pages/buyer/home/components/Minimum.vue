<template>
  <div class="minimum">
    <div class="minimum-title">
      <div class="minimum-title-left"></div>
      <div class="minimum-title-center">
        <p class="minimum-title-center-top">每日特价</p>
        <p class="minimum-title-center-bottom">————便宜又好吃————</p>
      </div>
      <div class="minimum-title-right"></div>
    </div>
    <div class="minimum-content">
      <ul>
        <router-link to="/detail">
          <li class="item border-bottom" v-for="item of minimumPriceList" :key="item.id">
            <div class="item-img">
              <img :src="item.imgUrl" alt="">
            </div>
            <p class="item-desc">{{item.desc}}</p>
            <p class="item-price">{{item.price}}</p>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMinimum',
  data () {
    return {
      minimumPriceList: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00'
        }, {
          id: '0002',
          imgUrl: 'https://img10.360buyimg.com/n7/jfs/t23566/321/2459019300/418458/bf23226e/5b7fad2cN7961426f.jpg',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00'
        }, {
          id: '0003',
          imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/28473/39/11517/753149/5c90b4acE86a5662c/ab810b9167736079.png',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00'
        }, {
          id: '0004',
          imgUrl: 'https://img12.360buyimg.com/n7/jfs/t24637/296/923948809/749862/6eb9a861/5b82b3c0N779a24cc.png',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00'
        }, {
          id: '0005',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00'
        }, {
          id: '0006',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .minimum{
    width: 100%;
    overflow: hidden;
    margin-bottom: 1.2rem;
  }
  .minimum-title{
    width: 100%;
    height: 0;
    padding-bottom: 20%;
    position: relative;
    background-color: #ffbdce;
  }
  .minimum-title-center{
    position: absolute;
    top: .15rem;
    bottom: .15rem;
    left: 1.2rem;
    right: 1.2rem;
    border-radius: .1rem;
    background-color: white;
  }
  .minimum-title-center-top{
    text-align: center;
    font-size: .35rem;
    margin-top: .2rem;
    text-shadow: .05rem .05rem  #cccccc;
    color: red;
  }
  .minimum-title-center-bottom{
    text-align: center;
    font-size: .2rem;
    margin-top: .1rem;
    color: #999999;
  }

  .item{
    /*width: 100%;*/
    padding-bottom: 50%;
    height: 0;
    width: 32%;
    margin-left: 1%;
    float: left;
    overflow: hidden;
    /*background-color: pink;*/
  }
  .item-img{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    /*background-color: #55a532;*/
  }
  .item-img img{
    width: 100%;
    overflow: hidden;
  }
  .item-desc{
    line-height: .6rem;
    color: #666666;
    /*background-color: #9a6e3a;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-price{
    line-height: .4rem;
    text-align: center;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    color: red;
    font-size: .34rem;
    font-weight: bolder;
  }
</style>
