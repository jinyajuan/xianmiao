<template>
  <div class="footer">
    <div class="sum">
      <span class="sum-word">合计：￥</span>
      <span class="sum-price">123.00</span>
    </div>
    <div class="buy-btn">
      <router-link to="/pay">
        <button>付款</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderFooter'
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
