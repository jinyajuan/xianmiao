<template>
  <router-link to="/">
    <div class="exit">
      退出
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AdminExit'
}
</script>

<style scoped>
  .exit {
    position: fixed;
    right: .2rem;
    bottom: 1.2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    line-height: 50px;
    text-align: center;
    font-size: .32rem;
    font-weight: bold;
  }
</style>
