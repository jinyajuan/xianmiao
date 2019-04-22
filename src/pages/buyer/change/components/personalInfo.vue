<template>
  <div class="center">
    <input class="border-bottom" type="text" ref="buyer_name" placeholder="请输入收件人姓名">
    <input class="border-bottom" type="text" ref="buyer_phone"  placeholder="请输入收件人电话号码">
    <input class="border-bottom" type="text" ref="buyer_address" placeholder="请输入收件人地址">
    <button @click="changePersonalInfo">确认修改</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ChangePersonalInfo',
  data () {
    return {
      buyer_name: '',
      buyer_phone: '',
      buyer_address: ''
    }
  },
  methods: {
    changePersonalInfo () {
      if (this.$refs.buyer_name.value === '' || this.$refs.buyer_phone.value === '' || this.$refs.buyer_address.value === '') {
        alert('请完整填写收件人信息')
      } else {
        axios.post('/buyer/changePersonalInfo', {
          buyer_id: sessionStorage.getItem('buyer_login_state'),
          buyer_name: this.$refs.buyer_name.value,
          buyer_phone: this.$refs.buyer_phone.value,
          buyer_address: this.$refs.buyer_address.value
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
}
</script>

<style scoped>
  .center{
    width: 80%;
    height: 0;
    padding-bottom: 100%;
    margin: 2rem auto;
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
</style>
