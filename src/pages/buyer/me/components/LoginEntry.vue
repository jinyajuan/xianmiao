<template>
  <div class="login border-bottom">
    <div class="already_login" v-if="login">
      <img src="@/assets/Images/bgImg/716f421ebcdf580f0cffc326ad195a36.png" alt="">
    </div>
    <div class="login-entry" v-else>
      <button @click="goLogin">点击登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeLoginEntry',
  data () {
    return {
      login: true
    }
  },
  mounted () {
    if (location.hash === '#/buyer/me') {
      // console.log('没有登录')
      this.login = false
    } else {
      // console.log('已经登录')
      this.login = true
    }
  },
  methods: {
    goLogin () {
      this.$router.push('/buyer/login')
    }
  }
}
</script>

<style scoped>
.login{
  width: 100%;
  height: 2rem;
  margin-top: .86rem;
  padding-top: .4rem;
  /*background-color: fuchsia;*/
}
.login-entry{
  width: 40%;
  height: 80%;
  line-height: 1.6rem;
  text-align: center;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #ffbdce;
  color: white;
  font-size: .4rem;
}
.already_login{
  width: 1.5rem;
  margin: 0 auto;
}
img {
  width: 1.5rem;
}
button{
  background-color: #ffbdce;
  color: white;
  font-weight: bolder;
}
</style>
