<template>
  <div class="center">
    <div>
      <div class="session">
        <label for="img">图片地址</label>
        <input id="img" type="text" :value="this.$route.query.goods_img" ref="goods_img">
      </div>
      <div class="session">
        <label for="name">商品名称</label>
        <input id="name" type="text" :value="this.$route.query.goods_name" ref="goods_name">
      </div>
      <div class="session">
        <label>商品种类</label>
        <select v-model="goods_type">
          <option v-for="item of optionList" :key="item.id" :value="item.id">{{item.text}}</option>
        </select>
      </div>
      <div class="session">
        <label for="price">商品单价</label>
        <input id="price" type="text" :value="this.$route.query.goods_price" ref="goods_price">
      </div>
      <div class="session">
        <label for="desc">详细描述</label>
        <input id="desc" type="text" :value="this.$route.query.goods_desc" ref="goods_desc">
      </div>
      <div class="session">
        <label for="notice">活动公告</label>
        <input id="notice" type="text" :value="this.$route.query.goods_notice" ref="goods_notice">
      </div>
      <div class="btn-session">
        <input class="btn" type="submit" value="确认修改" @click="changeGoodsInfo">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ChangeGoodsInfo',
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
      goods_type: this.$route.query.goods_type,
      goods_id: '',
      goods_img: '',
      goods_name: '',
      goods_price: '',
      goods_desc: '',
      goods_notice: ''
    }
  },
  updated () {
    console.log(this.goods_type)
  },
  methods: {
    changeGoodsInfo () {
      console.log(this.goods_type)
      axios.post('/users/changeGoodsInfo', {
        goods_id: this.$route.query.goods_id,
        goods_img: this.$refs.goods_img.value,
        goods_type: this.goods_type,
        goods_name: this.$refs.goods_name.value,
        goods_price: this.$refs.goods_price.value,
        goods_desc: this.$refs.goods_desc.value,
        goods_notice: this.$refs.goods_notice.value
      }).then((response) => {
        let res = response.data
        if (res.status === 0) {
          alert(res.msg)
          this.$router.go(-1)
        } else {
          alert(res.msg)
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
</style>
