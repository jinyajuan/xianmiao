<template>
  <div class="center">
    <div class="item border-bottom">
      <span class="title">订单编号：</span>
      <span class="content">20190404213432112</span>
    </div>
    <div class="item border-bottom">
      <span class="title">订单状态：</span>
      <span class="hanNo" v-if="this.$route.query.state">
        <span class="content">未接单</span>
        <button class="btn">确认接单</button>
      </span>
      <span class="hanYes" v-else>
        <span class="content">已接单</span>
      </span>
    </div>
    <div class="item border-bottom">
      <span class="title">商品编号：</span>
      <span class="content">0012293893</span>
    </div>
    <div class="item border-bottom">
      <span class="title">商品名称：</span>
      <span class="content">苹果</span>
    </div>
    <div class="item border-bottom">
      <span class="title">商品单价：</span>
      <span class="content">23.33</span>
    </div>
    <div class="item border-bottom">
      <span class="title">购买数量：</span>
      <span class="content">2</span>
    </div>
    <div class="item border-bottom">
      <span class="title">总价：</span>
      <span class="content">222.00</span>
    </div>
    <div class="item border-bottom">
      <span class="title">买家编号：</span>
      <span class="content">02983920</span>
    </div>
    <div class="item border-bottom">
      <span class="title">买家姓名：</span>
      <span class="content">杨千嬅</span>
    </div>
    <div class="item border-bottom">
      <span class="title">联系方式：</span>
      <span class="content">13899076560</span>
    </div>
    <div class="item border-bottom">
      <span class="title">买家地址：</span>
      <span class="content">湖南省湘潭市湘潭大学南苑13栋</span>
    </div>
    <div class="item border-bottom">
      <span class="title">备注：</span>
      <span class="content">圆通快递，谢谢~</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCenter',
  mounted () {
    console.log(this.$route.query.state)
  }
}
</script>

<style scoped>
  .center{
    margin: 1rem .2rem 2rem;
  }
  .item{
    height: .86rem;
    line-height: .86rem;
    font-size: .34rem;
  }
  .title{
    display: inline-block;
    width: 2rem;
    /*background: #ee9900;*/
  }
  .btn{
    width: 1.8rem;
    height: .5rem;
    border-radius: .2rem;
    background: red;
    color: #ffffff;
  }
</style>
