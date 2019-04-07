<template>
  <div class="reg">
      <form action="">
        <div :class="{'hide': isHide}">
          <input class="border-bottom" type="text" placeholder="请输入用户名">
          <input class="border-bottom" type="password" placeholder="请输入密码">
          <input class="border-bottom" type="password" placeholder="请再次输入密码">
          <input class="btn" type="button" @click="handleNext" value="下一步">
        </div>
        <div :class="{'hide': (!isHide)}">
          <input class="border-bottom" type="text" placeholder="请输入收件人姓名">
          <input class="border-bottom" type="tel" placeholder="请输入收件人电话号码">
          <input class="border-bottom" type="text" placeholder="请输入收件人地址">
          <router-link to="/buyer/login">
            <input class="btn" type="submit" value="注册">
          </router-link>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'LoginCenter',
  data () {
    return {
      isHide: false
    }
  },
  methods: {
    handleNext () {
      this.isHide = !this.isHide
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
