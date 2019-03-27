<template>
  <div class="total border-top">
    <div class="choose-all">
      <input type="radio">
      <span class="choose-all-word">全选</span>
    </div>
    <div class="sum">
      <span>合计：</span>
      <span class="sum-price"></span>
    </div>
    <div class="buy-btn">
      <button>结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartTotal'
}
</script>

<style scoped>
  .total{
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 1rem;
    width: 100%;
    height: .86rem;
    line-height: .86rem;
    /*margin: 0 auto;*/
    background-color: #eeeeee;
  }
  .choose-all{
    margin-left: .3rem;
  }
  .choose-all-word, .sum{
    color: red;
    font-size: .32rem;
  }
  .buy-btn{
    margin-right: .3rem;
  }
  .buy-btn button{
    width: 1.2rem;
    height: .6rem;
    background-color: red;
    color: white;
    font-size: .38rem;
    border-radius: .5rem;
  }
</style>
