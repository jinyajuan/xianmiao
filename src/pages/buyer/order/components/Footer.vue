<template>
  <div class="footer">
    <div class="sum">
      <span class="sum-word">合计：￥</span>
      <span class="sum-price">{{parseFloat(this.totalMoney.toFixed(2))}}</span>
    </div>
    <div class="buy-btn">
      <button @click="goPay">付款</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'OrderFooter',
  data () {
    return {
      totalMoney: 0
    }
  },
  mounted () {
    this.$store.state.CartItemListGoPay.forEach((item) => {
      this.totalMoney += item.goods_price * item.goods_count
    })
  },
  methods: {
    goPay () {
      if (this.$store.state.CartItemListGoPay.length === 0) {
        alert('请返回选择商品~')
      }
      for (var i = 0; i < this.$store.state.CartItemListGoPay.length; i++) {
        this.$store.state.CartItemListGoPay[i].goods_checked = 1
      }
      console.log(this.$store.state.BuyerRemake)
      axios.post('/buyer/goPay', {
        goods_list: this.$store.state.CartItemListGoPay,
        buyer_remake: this.$store.state.BuyerRemake
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          alert(res.msg)
          this.$router.push('/buyer/pay')
        }
      })
    }
  }
}
</script>

<style scoped>
  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1rem;
    background-color: #eeeeee;
  }
  .sum{
    width: 70%;
    height: 1rem;
    line-height: 1rem;
    /*padding-left: 2rem;*/
    /*background-color: #ee9900;*/
    float: left;
    color: red;
    font-size: .38rem;
    font-weight: bolder;
    text-align: right;
  }
  .buy-btn{
    width: 30%;
    height: .86rem;
    line-height: 1rem;
    text-align: center;
    /*background-color: #55a532;*/
    float: right;
  }
  .buy-btn button {
    width: 1.2rem;
    height: .6rem;
    background-color: red;
    color: white;
    font-size: .38rem;
    border-radius: .5rem;
  }

</style>
