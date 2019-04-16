<template>
  <div class="login">
    <div class="welcome">欢迎来到卖家板块~</div>
    <div>
      <input class="border-bottom" v-model="user_id" type="text" placeholder="请输入用户名">
      <input class="border-bottom" v-model="user_pwd" type="password" placeholder="请输入密码">
      <button @click="sellerLogin">登录</button>
      <router-link to="/seller/reg">没有账号？立即注册</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginCenter',
  data () {
    return {
      user_id: '',
      user_pwd: ''
    }
  },
  methods: {
    sellerLogin () {
      axios.post('/users/login', {
        user_id: this.user_id,
        user_pwd: this.user_pwd
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          alert(res.msg)
          this.$router.push({
            path: '/seller/home',
            query: {
              user_id: this.user_id
            }
          })
        } else if (res.status === 1) {
          // console.log('密码错误')
          alert(res.msg)
        } else {
          // console.log('未被注册')
          alert(res.msg)
        }
      })
    }
  }
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
  .error{
    color: red;
  }
  .welcome{
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
