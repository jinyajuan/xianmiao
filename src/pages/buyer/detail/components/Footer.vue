<template>
  <div class="footer border-top">
    <div class="icons-icon border-right">
      <router-link to="/">
       <span class="iconfont">&#xe607;</span>
      </router-link>
    </div>
    <div class="icons-icon border-right">
      <router-link to="/buyer/cart">
        <span class="iconfont">&#xe61b;</span>
        <span class="goodsCount">{{this.cart_all_goods_length}}</span>
      </router-link>
    </div>
    <div class="icons-buyer border-right add">
      <span class="iconfont-desc" @click="addCartItemList">加入购物车</span>
    </div>
    <div class="icons-buyer buy">
      <span class="iconfont-desc" @click="buyImmediately">立即购买</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailFooter',
  data () {
    return {
      buyer_id: '',
      goods_id: '',
      cart_all_goods_length: 0
    }
  },
  methods: {
    // 加入购物车
    addCartItemList () {
      if (sessionStorage.getItem('buyer_login_state') === null) {
        alert('请先登录')
        this.$router.push('/buyer/login')
      } else {
        axios.post('/buyer/addCart', {
          buyer_id: sessionStorage.getItem('buyer_login_state'),
          goods_id: this.$route.query.goods_id
        }).then((response) => {
          let res = response.data
          // console.log(res)
          if (res.status === 0) {
            alert(res.msg)
            axios.post('/buyer/cartList', {
              buyer_id: sessionStorage.getItem('buyer_login_state')
            }).then((response) => {
              let res = response.data
              if (res.status === 0) {
                // alert(res.msg)
                this.cart_all_goods_length = res.result.length
              }
            })
          }
        })
      }
    },
    buyImmediately () {
      console.log(sessionStorage.getItem('buyer_login_state'))
      if (sessionStorage.getItem('buyer_login_state') === null) {
        alert('请先登录')
        this.$router.push('/buyer/login')
      } else {
        this.$store.state.CartItemListGoPay.push(this.$route.query)
        this.$router.push('/buyer/order')
      }
    }
  },
  mounted () {
    axios.post('/buyer/cartList', {
      buyer_id: sessionStorage.getItem('buyer_login_state')
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        // alert(res.msg)
        this.cart_all_goods_length = res.result.length
      }
    })
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  /*background-color: fuchsia;*/
}
.icons-icon{
  width: 20%;
  background-color: #eeeeee;
}
.icons-buyer{
  width: 30%;
}
.add{
  background-color: #333333;
}
.buy{
  background-color: red;
}

.iconfont{
  display: block;
  text-align: center;
  font-size: .5rem;
  line-height: 1rem;
  color: red;
}
.iconfont-desc{
  display: block;
  text-align: center;
  line-height: 1rem;
  color: #ffffff;
}
  .goodsCount{
    z-index: 99;
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
    border-radius: 50%;
    background: red;
    color: white;
    width: .4rem;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
  }
</style>
