<template>
  <div class="center">
    <div class="change-box border-bottom">
      <span  v-for="(item, index) of tabList" :key="item.id" class="change"
            @click="switchTab(index)"
      >{{item.tab}}</span>
    </div>
    <div class="see-base info-session">
      <div>
        <div class="session">
          <label>真实姓名</label>
          <input type="text" value="" disabled="disabled" ref="user_name">
        </div>
        <div class="session">
          <label>证件号码</label>
          <input type="text" value="" disabled="disabled" ref="user_identify">
        </div>
        <div class="session">
          <label>店铺名称</label>
          <input type="text" placeholder=""  disabled="disabled" ref="shop_name">
        </div>
        <div class="session">
          <label>店铺地址</label>
          <input type="text" placeholder=""  disabled="disabled" ref="shop_address">
        </div>
        <div class="session">
          <label>联系电话 </label>
          <input type="tel" placeholder='' disabled="disabled" ref="user_phone">
        </div>
      </div>
    </div>
    <div class="change-pass info-session" v-bind:class="{active:isActive}">
      <div>
        <div class="session">
          <label for="old_pass">原密码：</label>
          <input id="old_pass" type="password" placeholder="请输入原来的密码..." ref="old_pwd">
        </div>
        <div class="session">
          <label for="new_pass">新密码：</label>
          <input id="new_pass" type="password" placeholder="请输入新的密码..." ref="new_pwd">
        </div>
        <div class="session">
          <label for="new_pass_again">确认密码：</label>
          <input id="new_pass_again" type="password" placeholder="请再次输入新的密码..." ref="new_pwd_again">
        </div>
        <div class="btn-session">
          <input class="btn" type="submit" value="提交" @click="changePwd">
        </div>
      </div>
    </div>
    <div class="change-phone info-session" v-bind:class="{active:isActive}">
     <div>
       <div class="session">
         <label for="shop_name">店名:</label>
         <input id="shop_name" type="tel" placeholder="请输入新的店铺名称..." ref="change_shop_name">
       </div>
       <div class="session">
         <label for="shop_address">地址:</label>
         <input id="shop_address" type="tel" placeholder="请输入新的店铺地址..." ref="change_shop_address">
       </div>
        <div class="session">
          <label for="new_phone">新号码</label>
          <input id="new_phone" type="tel" placeholder="请输入新的手机号码..." ref="change_user_phone">
        </div>
        <div class="btn-session">
          <input class="btn" type="submit" value="提交" @click="changePhone">
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'InfoCenter',
  data () {
    return {
      user_id: '',
      user_phone: '',
      shop_name: '',
      shop_address: '',
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
          tab: '其他信息'
        }
      ]
    }
  },
  mounted () {
    this.change = document.querySelectorAll('.change')
    this.change[0].style.color = 'red'
    //  基本信息的获取
    axios.post('/users/baseInfo', {
      user_id: this.$route.query.user_id
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        this.$refs.user_name.placeholder = res.result[0].user_name
        this.$refs.user_identify.placeholder = res.result[0].user_identify
        this.$refs.shop_name.placeholder = res.result[0].shop_name
        this.$refs.shop_address.placeholder = res.result[0].shop_address
        this.$refs.user_phone.placeholder = res.result[0].user_phone
      }
    })
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
    },
    // 修改密码
    changePwd () {
      axios.post('/users/selectPassword', {
        user_id: this.$route.query.user_id
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          if (this.$refs.old_pwd.value !== res.result[0].user_pwd) {
            alert('原密码输入错误')
            this.$refs.old_pwd.value = ''
            this.$refs.new_pwd.value = ''
            this.$refs.new_pwd_again.value = ''
          }
          if (this.$refs.new_pwd.value !== this.$refs.new_pwd_again.value) {
            alert('新密码与确认密码不一致，请重新输入！！！')
            this.$refs.old_pwd.value = ''
            this.$refs.new_pwd.value = ''
            this.$refs.new_pwd_again.value = ''
          }
          if (this.$refs.old_pwd.value === res.result[0].user_pwd && this.$refs.new_pwd.value === this.$refs.new_pwd_again.value) {
            // alert(res.msg)
            // 原密码与数据库密码一致，且新密码和确认弥漫着一致的时候去修改数据库的存储密码
            axios.post('/users/changePassword', {
              user_id: this.$route.query.user_id,
              user_pwd: this.$refs.new_pwd.value
            }).then((response) => {
              let res = response.data
              if (res.status === 0) {
                alert(res.msg)
                this.$router.go(-1)
              }
            })
          }
        }
      })
    },
    // 修改其他信息
    changePhone () {
      axios.post('/users/changePhone', {
        user_id: this.$route.query.user_id,
        user_phone: this.$refs.change_user_phone.value,
        shop_name: this.$refs.change_shop_name.value,
        shop_address: this.$refs.change_shop_address.value
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          alert(res.msg)
          this.$router.go(-1)
        }
      })
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
