<template>
  <div class="reg">
      <form action="">
        <div :class="{'hide': isHide}">
          <div class="title">欢迎来到卖家注册模块~</div>
          <input class="border-bottom" type="text" placeholder="请输入用户名">
          <input class="border-bottom" type="password" placeholder="请输入密码">
          <input class="border-bottom" type="password" placeholder="请再次输入密码">
          <input class="btn" type="button" @click="handleNextOne" value="下一步">
        </div>
        <div :class="{'hide': !isHide, 'hide1': isHide1}">
          <div class="title">请完善个人信息</div>
          <input class="border-bottom" type="text" placeholder="请输入您的姓名">
          <input class="border-bottom" type="text" placeholder="请输入您的证件号码(身份证)">
          <input class="border-bottom" type="tel" placeholder="请输入您的电话号码">
          <input class="btn" type="button" @click="handleNextTwo" value="下一步">
        </div>
        <div :class="{'hide': !isHide1}">
          <div class="title">请完善店铺信息~</div>
          <input class="border-bottom" type="text" placeholder="请输入您的店铺名称">
          <input class="border-bottom" type="password" placeholder="请输入您的店铺地址">
          <router-link to="/seller/login">
            <input class="btn" type="submit" value="注册">
          </router-link>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'RegCenter',
  data () {
    return {
      isHide: false,
      isHide1: false
    }
  },
  methods: {
    handleNextOne () {
      this.isHide = !this.isHide
    },
    handleNextTwo () {
      this.isHide1 = !this.isHide1
    }
  }
}
</script>

<style scoped>
  .reg{
    position: fixed;
    top: .86rem;
    bottom: 0;
    left: 0;
    right: 0;
    /*width: 80%;*/
    /*background-color: #55a532;*/
    padding: .5rem .5rem;
    /*background-color: #ee9900;*/
  }
  .hide{
     display: none;
   }
  .hide1{
    display: none;
  }
  .title{
    width: 100%;
    height: 1rem;
    text-align: center;
    font-weight: bolder;
    font-size: .34rem;
    color: red;
  }
  input{
    height: .86rem;
    width: 100%;
    border-radius: .1rem;
    border-bottom:.01rem solid #cccccc;
    margin-bottom: .2rem;
    text-indent: .2rem;
    font-size: .28rem;
    color: #666666;
  }
  .btn{
    display: block;
    width: 100%;
    height: .86rem;
    background-color: red;
    color: white;
    font-size: .32rem;
    margin: 0.2rem auto;
    border-radius: .1rem;
  }
  a{
    display: block;
    text-align: right;
    color: red;
  }
</style>
