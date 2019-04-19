<template>
  <div>
    <goods-header></goods-header>
    <goods-list :allGoodsType="allGoodsType"
                :fruitType="fruitType"
                :vegetablesType="vegetablesType"
                :meatType="meatType"
                :beanType="beanType"
                :eggType="eggType"
                :otherType="otherType"
    ></goods-list>
    <home-footer></home-footer>
  </div>
</template>

<script>
import GoodsHeader from '@/pages/buyer/goods/components/Header'
import GoodsList from '@/pages/buyer/goods/components/List'
import HomeFooter from '@/pages/buyer/home/components/Footer'
import axios from 'axios'
export default {
  name: 'BuyerGoods',
  components: {
    GoodsHeader,
    GoodsList,
    HomeFooter
  },
  data () {
    return {
      allGoodsType: [],
      fruitType: [],
      vegetablesType: [],
      meatType: [],
      beanType: [],
      eggType: [],
      otherType: []
    }
  },
  mounted () {
    axios.post('/buyer/getGoods', {

    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        console.log(res.result)
        this.allGoodsType = res.result
        for (var i = 0; i < res.result.length; i++) {
          if (res.result[i].goods_type === 1) {
            this.fruitType.push(res.result[i])
          } else if (res.result[i].goods_type === 2) {
            this.vegetablesType.push(res.result[i])
          } else if (res.result[i].goods_type === 3) {
            this.meatType.push(res.result[i])
          } else if (res.result[i].goods_type === 4) {
            this.beanType.push(res.result[i])
          } else if (res.result[i].goods_type === 5) {
            this.eggType.push(res.result[i])
          } else {
            this.otherType.push(res.result[i])
          }
        }
        // alert(res.msg)
      }
    })
    // this.GoodsListItem.forEach((item) => {
    //   if (item.sale > 999) {
    //     item.sale = 999 + '+'
    //   }
    // })
  }
}
</script>

<style scoped>

</style>
