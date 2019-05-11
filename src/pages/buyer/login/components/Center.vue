<template>
  <div class="login">
    <div>
      <input class="border-bottom" type="text" placeholder="请输入用户名" v-model="buyer_id">
      <input class="border-bottom" type="password" placeholder="请输入密码" v-model="buyer_pwd">
      <button @click="buyerLogin">登录</button>
      <router-link to="/buyer/reg">没有账号？立即注册</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginCenter',
  data () {
    return {
      buyer_id: '',
      buyer_pwd: ''
    }
  },
  methods: {
    buyerLogin () {
      if (this.buyer_id.length === 0) {
        alert('用户名不能为空')
      } else if (this.buyer_pwd.length === 0) {
        alert('密码不能为空')
      } else {
        axios.post('/buyer/login', {
          buyer_id: this.buyer_id,
          buyer_pwd: this.buyer_pwd
        }).then((response) => {
          let res = response.data
          // 登录成功
          if (res.status === 0) {
            alert(res.msg)
            sessionStorage.setItem('buyer_login_state', this.buyer_id) // 把用户名对应的值保存到sessionStorage
            this.$router.push({
              path: '/',
              query: {
                buyer_id: sessionStorage.getItem('buyer_login_state')
              }
            })
          } else if (res.status === 1) {
            // 用户名未被注册
            alert(res.msg)
            this.$router.push('/buyer/reg')
          } else {
            // 用户名或者密码错误
            alert(res.msg)
            this.buyer_id = ''
            this.buyer_pwd = ''
          }
        })
      }
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
