<template>
  <div class="login border-bottom">
    <router-link to="/buyer/login">
      <div class="login-entry">
        点击登录
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MeLoginEntry'
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
</style>
