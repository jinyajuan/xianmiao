<template>
  <div class="center">
    <form action="">
      <div class="session">
        <label for="img">上传图片:</label>
        <input id="img" type="file">
        <!--<input id="img" type="file" :value="this.$route.query.imgUrl">-->
      </div>
      <div class="session">
        <label for="name">名称:</label>
        <input id="name" type="text" :value="this.$route.query.name">
      </div>
      <div class="session">
        <label for="price">单价:</label>
        <input id="price" type="text" :value="this.$route.query.price">
      </div>
      <div class="session">
        <label for="desc">详细描述:</label>
        <input id="desc" type="text" :value="this.$route.query.desc">
      </div>
      <div class="session">
        <label for="notice">活动公告:</label>
        <input id="notice" type="text" :value="this.$route.query.notice">
      </div>
      <div class="btn-session">
        <router-link to="/seller/home">
          <input class="btn" type="submit" value="确认修改">
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChangeGoodsInfo',
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    console.log(this.$route.query)
    this.name = this.$route.query.name
    console.log(this.name)
  }
}
</script>

<style scoped>
  .center{
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    /*background-color: #795da3;*/
  }
  .session{
    height: .86rem;
    line-height: .86rem;
    overflow: hidden;
    margin: 0  .1rem .3rem .1rem;
  }
  .session label{
    width: 25%;
    display: inline-block;
    font-size: .32rem;
    float: left;
    /*background-color: #55a532;*/
  }
  .session input{
    width: 75%;
    display: inline-block;
    font-size: .32rem;
    float: right;
    line-height: .86rem;
    border-bottom: .3rem #ccc solid;
    /*background-color: #ee9900;*/
    border-radius: .1rem;
    border-bottom: .02rem solid #cccccc;
    /*margin-bottom: .2rem;*/
    text-indent: .2rem;
    color: #666666;
  }
  .btn-session{
    margin: 0 auto;
    width: 2rem;
    height: .8rem;
  }
  .btn{
    width: 2rem;
    height: .8rem;
    font-size: .34rem;
    margin: 0 auto;
    text-align: center;
    border-radius: .15rem;
    background-color: red;
    color: white;
  }
</style>
