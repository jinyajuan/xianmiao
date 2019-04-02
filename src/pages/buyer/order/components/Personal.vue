<template>
  <div class="person">
    <div class="personal">
      <div class="personal-info name">王昭君</div>
      <div class="personal-info phone">13899076580</div>
      <div class="personal-info address">广东省深圳市龙岗区坂田街道和成世纪名园小区22栋A单元702室</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPersonal'
}
</script>

<style scoped>
  .person{
    background-color: #eeeeee;
    padding: .15rem;
  }
  .personal{
    /*width: 100%;*/
    height: 2.5rem;
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

</style>
