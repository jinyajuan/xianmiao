<template>
  <div class="reg">
      <div>
        <div :class="{'hide': isHide}">
          <input class="border-bottom" type="text" placeholder="请输入用户名" v-model="buyer_id">
          <input class="border-bottom" type="password" placeholder="请输入至少8位密码" v-model="buyer_pwd">
          <input class="border-bottom" type="password" placeholder="请再次输入密码" v-model="buyer_pwd_again">
          <input class="btn" type="button" @click="handleNext" value="下一步">
        </div>
        <div :class="{'hide': (!isHide)}">
          <input class="border-bottom" type="text" placeholder="请输入收件人姓名" v-model="buyer_name">
          <input class="border-bottom" type="tel" placeholder="请输入收件人电话号码" v-model="buyer_phone">
          <input class="border-bottom" type="text" placeholder="请输入收件人地址" v-model="buyer_address">
          <input class="btn" type="submit" value="注册" @click="buyerReg">
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginCenter',
  data () {
    return {
      isHide: false,
      buyer_id: '',
      buyer_pwd: '',
      buyer_pwd_again: '',
      buyer_phone: '',
      buyer_name: '',
      buyer_address: ''
    }
  },
  methods: {
    handleNext () {
      if (this.buyer_id.length === 0) {
        alert('用户名不能为空！')
      } else if (this.buyer_pwd.length === 0) {
        alert('密码不能为空')
      } else if (this.buyer_pwd_again.length === 0) {
        alert('确认密码不能为空')
      } else if (this.buyer_pwd_again !== this.buyer_pwd) {
        alert('密码输入不一致，请重新输入！')
        this.buyer_pwd_again = ''
        this.buyer_pwd = ''
      } else if (this.buyer_pwd.length < 8) {
        alert('密码长度不能少于8位')
      } else {
        this.isHide = !this.isHide
      }
    },
    buyerReg () {
      if (this.buyer_name.length === 0) {
        alert('收货人姓名不能为空！')
      } else if (this.buyer_phone.length === 0) {
        alert('收货人联系方式不能为空！')
      } else if (this.buyer_address.length === 0) {
        alert('收货人地址不能为空！')
      } else if (!this.buyer_phone.match(/^[1][3|4|5|8][0-9]{9}$/)) {
        alert('手机号码格式有误，请重新输入~')
        this.buyer_phone = ''
      } else {
        axios.post('/buyer/reg', {
          buyer_id: this.buyer_id,
          buyer_pwd: this.buyer_pwd,
          buyer_phone: this.buyer_phone,
          buyer_name: this.buyer_name,
          buyer_address: this.buyer_address
        }).then((response) => {
          let res = response.data
          if (res.status === 0) {
            alert(res.msg)
            this.$router.push('/buyer/login')
          } else {
            alert(res.msg)
            this.isHide = !this.isHide
            this.$router.push('/buyer/reg')
            this.buyer_id = ''
            this.buyer_pwd = ''
            this.buyer_pwd_again = ''
            this.buyer_name = ''
            this.buyer_phone = ''
            this.buyer_address = ''
          }
        })
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
