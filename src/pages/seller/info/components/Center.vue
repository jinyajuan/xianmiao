<template>
  <div class="center">
    <div class="change-box border-bottom">
      <span  v-for="(item, index) of tabList" :key="item.id" class="change"
            @click="switchTab(index)"
      >{{item.tab}}</span>
    </div>
    <div class="see-base info-session">
      <form action="">
        <div class="session">
          <label for="name">店名</label>
          <input id="name" type="text" value="爱鲜会有机农产品直销店" disabled="disabled">
        </div>
        <div class="session">
          <label for="price">店址</label>
          <input id="price" type="text" placeholder="陕西省宝鸡市麟游县崔木镇山河村"  disabled="disabled">
        </div>
        <div class="session">
          <label for="desc">联系电话 </label>
          <input id="desc" type="tel" placeholder='18873218909' disabled="disabled">
        </div>
      </form>
    </div>
    <div class="change-pass info-session" v-bind:class="{active:isActive}">
      <form action="">
        <div class="session">
          <label for="old_pass">原密码：</label>
          <input id="old_pass" type="password" placeholder="请输入原来的密码...">
        </div>
        <div class="session">
          <label for="new_pass">新密码：</label>
          <input id="new_pass" type="password" placeholder="请输入新的密码">
        </div>
        <div class="session">
          <label for="new_pass_again">确认密码：</label>
          <input id="new_pass_again" type="password" placeholder="请再次输入新的密码">
        </div>
        <div class="btn-session">
          <router-link to="/seller/home">
            <input class="btn" type="submit" value="提交">
          </router-link>
        </div>
      </form>
    </div>
    <div class="change-phone info-session" v-bind:class="{active:isActive}">
      <form action="">
        <div class="session">
          <label for="old_phone">原号码</label>
          <input id="old_phone" type="tel" placeholder="请输入原来的手机号码...">
        </div>
        <div class="session">
          <label for="new_phone">新号码</label>
          <input id="new_phone" type="tel" placeholder="请输入新的手机号码...">
        </div>
        <div class="btn-session">
          <router-link to="/seller/home">
            <input class="btn" type="submit" value="提交">
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCenter',
  data () {
    return {
      isActive: true,
      tabCardCollection: '',
      change: '',
      tabList: [
        {
          id: '0001',
          tab: '基本信息'
        },
        {
          id: '0002',
          tab: '修改密码'
        },
        {
          id: '0003',
          tab: '修改电话'
        }
      ]
    }
  },
  mounted () {
    this.change = document.querySelectorAll('.change')
    this.change[0].style.color = 'red'
  },
  methods: {
    switchTab (index) {
      this.tabCardCollection = document.querySelectorAll('.info-session')
      this.change = document.querySelectorAll('.change')
      for (var i = 0; i < this.tabList.length; i++) {
        if (i !== index) {
          this.tabCardCollection[i].style.display = 'none'
          this.change[i].style.color = ''
        } else {
          this.tabCardCollection[i].style.display = 'block'
          this.change[i].style.color = 'red'
        }
      }
    }
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
  .change-box{
    /*width: 90%;*/
    margin: 0 auto .2rem;
    display: flex;
    justify-content: space-around;
  }
  .change{
    /*width: 1rem;*/
    height: .86rem;
    line-height: .96rem;
    font-size: .34rem;
  }
  .active{
    display: none;
  }
</style>
