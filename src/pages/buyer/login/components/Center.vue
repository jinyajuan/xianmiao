<template>
  <div class="login">
    <form action="">
      <input class="border-bottom" type="text" placeholder="请输入用户名">
      <input class="border-bottom" type="password" placeholder="请输入密码">
      <router-link to="/">
        <button>登录</button>
      </router-link>
      <router-link to="/buyer/reg">没有账号？立即注册</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginCenter'
}
</script>

<style scoped>
  .login{
    width: 80%;
    height: 0;
    padding-bottom: 100%;
    margin: 2rem auto;
    /*background-color: #ee9900;*/
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
  button{
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
