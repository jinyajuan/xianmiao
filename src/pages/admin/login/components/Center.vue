<template>
  <div class="login">
    <div>
      <input class="border-bottom" type="text" placeholder="请输入管理员账号" ref="admin_id">
      <input class="border-bottom" type="password" placeholder="请输入密码" ref="admin_pwd">
      <button @click="adminLogin">登录</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginCenter',
  methods: {
    adminLogin () {
      if (this.$refs.admin_id.value === '' || this.$refs.admin_pwd.value === '') {
        alert('请完整的填写账号和密码')
      } else {
        axios.post('/admin/login', {
          admin_id: this.$refs.admin_id.value,
          admin_pwd: this.$refs.admin_pwd.value
        }).then((response) => {
          let res = response.data
          // 登录成功
          if (res.status === 0) {
            alert(res.msg)
            this.$router.push({
              path: '/admin/home',
              query: {
                admin_id: this.$refs.admin_id.value
              }
            })
          } else if (res.status === 1) {
            alert(res.msg)
            this.admin_id = ''
            this.admin_pwd = ''
          } else {
            alert(res.msg)
            this.admin_id = ''
            this.admin_pwd = ''
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
