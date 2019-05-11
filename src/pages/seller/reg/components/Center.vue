<template>
  <div class="reg">
    <div>
        <div :class="{'hide': isHide}">
          <div class="title">欢迎来到卖家注册模块~</div>
          <input class="border-bottom" type="text"     v-model="user_id" placeholder="请输入卖家端的账号" ref="user_id">
          <input class="border-bottom" type="password" v-model="user_pwd"  placeholder="请输入密码">
          <input class="border-bottom" type="password" v-model="user_pwd_again" placeholder="请再次输入密码">
          <input class="btn" type="button" @click="handleNextOne" value="下一步">
        </div>
        <div :class="{'hide': !isHide, 'hide1': isHide1}">
          <div class="title">请完善个人信息</div>
          <input class="border-bottom" type="text" v-model="user_name" placeholder="请输入您的姓名">
          <input class="border-bottom" type="text" v-model="user_identify" placeholder="请输入您的证件号码(身份证)">
          <input class="border-bottom" type="tel"  v-model="user_phone" placeholder="请输入您的电话号码">
          <input class="btn" type="button" @click="handleNextTwo" value="下一步">
        </div>
        <div :class="{'hide': !isHide1}">
          <div class="title">请完善店铺信息~</div>
          <input class="border-bottom" type="text" v-model="shop_name" placeholder="请输入您的店铺名称">
          <input class="border-bottom" type="text" v-model="shop_address" placeholder="请输入您的店铺地址">
          <!--<router-link to="/seller/login">-->
          <input class="btn" type="submit" value="注册" @click="sellerReg">
          <!--</router-link>-->
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RegCenter',
  data () {
    return {
      user_id: '',
      user_pwd: '',
      user_pwd_again: '',
      user_name: '',
      user_identify: '',
      user_phone: '',
      shop_name: '',
      shop_address: '',
      isHide: false,
      isHide1: false
    }
  },
  methods: {
    sellerReg () {
      if (this.shop_name.length === 0) {
        alert('店铺名称不能为空')
      } else if (this.shop_address.length === 0) {
        alert('店铺地址不能为空')
      } else {
        axios.post('/users/reg', {
          user_id: this.user_id,
          user_pwd: this.user_pwd,
          user_name: this.user_name,
          user_identify: this.user_identify,
          user_phone: this.user_phone,
          shop_name: this.shop_name,
          shop_address: this.shop_address
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
          } else {
            alert(res.msg)
          }
        })
      }
    },
    handleNextOne () {
      if (this.user_id.length === 0) {
        alert('用户名不能为空！')
      } else if (this.user_pwd.length === 0) {
        alert('密码不能为空！')
      } else if (this.user_pwd.length < 8) {
        alert('密码不能少于8位~')
      } else if (this.user_pwd !== this.user_pwd_again) {
        alert('前后两次输入的密码不一致！')
      } else {
        this.isHide = !this.isHide
      }
    },
    handleNextTwo () {
      if (this.user_name.length === 0) {
        alert('姓名不能为空！')
      } else if (!this.user_name.match(/^[\u4E00-\u9FA5]{1,10}$/)) {
        alert('请填写汉字')
      } else if (this.user_identify.length === 0) {
        alert('证件号码不能为空！')
      } else if (!this.user_identify.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)) {
        alert('证件号码格式有误！')
        this.user_identify = ''
      } else if (this.user_phone.length === 0) {
        alert('手机号码不能为空')
      } else if (!this.user_phone.match(/^[1][3|4|5|8][0-9]{9}$/)) {
        alert('手机号码格式有误，请重新输入~')
        this.user_phone = ''
      } else {
        this.isHide1 = !this.isHide1
      }
    }
  }
}
</script>

<style scoped>
  .reg{
    position: fixed;
    top: .86rem;
    bottom: 0;
    left: 0;
    right: 0;
    /*width: 80%;*/
    /*background-color: #55a532;*/
    padding: .5rem .5rem;
    /*background-color: #ee9900;*/
  }
  .hide{
     display: none;
   }
  .hide1{
    display: none;
  }
  .title{
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
  .btn{
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
