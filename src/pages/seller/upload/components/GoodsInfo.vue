<template>
  <div class="center">
    <div>
      <!--<form action="">-->
      <div>
      <div class="session">
        <label for="img">上传图片</label>
        <input id="img" type="text" v-model="goods_img" placeholder="请输入图片链接...">
      </div>
      <div class="session">
        <label for="name">商品名称</label>
        <input id="name" type="text" v-model="goods_name" placeholder="请输入商品名称...">
      </div>
      <div class="session">
        <label>商品种类</label>
        <select v-model="goods_type">
          <option v-for="item of optionList" :key="item.id" :value="item.id">{{item.text}}</option>
        </select>
      </div>
        <div class="session">
          <label for="price">商品单价</label>
          <input id="price" type="text" v-model="goods_price" placeholder="请输入商品的单价...">
        </div>
      <div class="session">
        <label for="desc">详细描述</label>
        <input id="desc" type="text" v-model="goods_desc" placeholder="请输入商品的详细描述...">
      </div>
      <div class="session">
        <label for="notice">活动公告</label>
        <input id="notice" type="text" v-model="goods_notice" placeholder="请输入商品的活动公告...">
      </div>
      <div class="btn-session">
        <!--<router-link to="/seller/home">-->
          <input class="btn" type="submit" value="提交" @click="uploadGoods">
        <!--</router-link>-->
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UploadGoodsInfo',
  data () {
    return {
      optionList: [
        {id: 1, text: '水果'},
        {id: 2, text: '蔬菜'},
        {id: 3, text: '肉制品'},
        {id: 4, text: '豆制品'},
        {id: 5, text: '蛋类'},
        {id: 6, text: '其他'}
      ],
      user_id: '',
      goods_id: '',
      goods_img: '',
      goods_name: '',
      goods_type: 0,
      goods_price: '',
      goods_desc: '',
      goods_notice: '',
      goods_count: '',
      goods_score: '',
      goods_sale: '',
      goods_checked: ''
    }
  },
  methods: {
    uploadGoods () {
      console.log(this.goods_img)
      if (this.goods_img === '' || this.goods_name === '' || this.goods_price === '' || this.goods_desc === '' || this.goods_notice === '' || this.goods_type === 0) {
        alert('请完整填写所有信息')
      } else {
        axios.post('/users/uploadGoods', {
          user_id: this.$route.query.user_id,
          goods_id: (new Date()).getTime(),
          goods_img: this.goods_img,
          goods_name: this.goods_name,
          goods_type: this.goods_type,
          goods_price: this.goods_price,
          goods_desc: this.goods_desc,
          goods_notice: this.goods_notice,
          goods_count: 1,
          goods_score: 0,
          goods_sale: 0,
          goods_checked: 0
        }).then((response) => {
          let res = response.data
          if (res.status === 0) {
            alert(res.msg)
            this.goods_img = ''
            this.goods_name = ''
            this.goods_price = ''
            this.goods_type = 0
            this.goods_desc = ''
            this.goods_notice = ''
          } else {
            alert(res.msg)
            // console.log('上传失败')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  select {
    height: .5rem;
  }
  select>option{
    height: .2rem !important;
    font-size: .2rem !important;
  }
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
