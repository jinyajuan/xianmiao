<template>
  <div class="person">
    <div class="personal" v-for="item of personalInfo" :key="item.id">
      <div class="personal-info name" ref="name">{{item.buyer_name}}</div>
      <div class="personal-info phone" ref="phone">{{item.buyer_phone}}</div>
      <div class="personal-info address" ref="address">{{item.buyer_address}}</div>
      <router-link class="change" to="/buyer/change">
        更改收件信息>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPersonal',
  props: {
    personalInfo: Array
  }
}
</script>

<style scoped>
  .person{
    /*background-color: #55a532;*/
    background-color: #eeeeee;
    padding: .15rem;
  }
  .personal{
    /*width: 100%;*/
    /*height: 2.5rem;*/
    overflow: hidden;
    padding: .15rem;
    border-radius: .1rem;
    background-color: white;
  }
  .personal-info{
    margin-top: .1rem;
    /*height: .5rem;*/
    line-height: .5rem;
    overflow: hidden;
  }
  .name{
    float: left;
    width: 50%;
    font-size: .4rem;
    color: #333333;
    /*background-color: #25a4bb;*/
  }
  .phone{
    float: right;
    width: 50%;
    font-size: .3rem;
    color: #666666;
    /*background-color: #ee9900;*/
  }
  .address{
    width: 100%;
    padding: .3rem 0;
    /*background-color: #55a532;*/
  }
  .change{
    float: right;
  }

</style>
