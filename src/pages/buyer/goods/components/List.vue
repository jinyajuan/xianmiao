<template>
  <div class="list">
    <ul>
      <li class="item border-bottom border-rightbottom" v-for="item of GoodsListItem" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <p class="item-desc">{{item.desc}}</p>
        <div>
          <p class="item-price">{{item.price}}</p>
          <p class="item-count">{{item.count}}份</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      GoodsListItem: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00',
          count: '1232'
        }, {
          id: '0002',
          imgUrl: 'https://img10.360buyimg.com/n7/jfs/t23566/321/2459019300/418458/bf23226e/5b7fad2cN7961426f.jpg',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00',
          count: '1232'
        }, {
          id: '0003',
          imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/28473/39/11517/753149/5c90b4acE86a5662c/ab810b9167736079.png',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00',
          count: '1432'
        }, {
          id: '0004',
          imgUrl: 'https://img12.360buyimg.com/n7/jfs/t24637/296/923948809/749862/6eb9a861/5b82b3c0N779a24cc.png',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00',
          count: '3432'
        }, {
          id: '0005',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00',
          count: '132'
        }, {
          id: '0006',
          imgUrl: 'https://img10.360buyimg.com/n2/jfs/t27556/260/2108512160/465739/73f83982/5bf79780N414fe121.jpg',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          price: '￥34.00',
          count: '132'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .list{
    width: 100%;
    margin-top: .86rem;
    /*background-color: #55a532;*/
  }
  .item{
    width: 50%;
    height: 0;
    padding-bottom: 70%;
    float: left;
    overflow: hidden;
    margin-bottom: 1.2rem;
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
    width: 50%;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    color: red;
    font-size: .34rem;
    font-weight: bolder;
  }
  .item-count{
    line-height: .7rem;
    float: right;
    width: 40%;
    /*margin-top: .16rem;*/
    /*background-color: lightcoral;*/
    text-align: right;
    color: #666666;
    font-size: .3rem;
    padding-right: .16rem;
  }
</style>
