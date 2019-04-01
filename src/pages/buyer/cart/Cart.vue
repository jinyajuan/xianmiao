<template>
  <div>
    <cart-header></cart-header>
    <cart-list :CartItemList="CartItemList"
               @countMinusOrAdd="handleCountMinusOrAdd"
               @isSelectSingle="handleIsSelectSingle"
    ></cart-list>
    <cart-total @handleIsSelectAll="handleIsSelectAll"></cart-total>
    <home-footer></home-footer>
  </div>
</template>

<script>
import CartHeader from '@/pages/buyer/cart/components/Header'
import CartList from '@/pages/buyer/cart/components/List'
import CartTotal from '@/pages/buyer/cart/components/Total'
import HomeFooter from '@/pages/buyer/home/components/Footer'
export default {
  name: 'Cart',
  data () {
    return {
      CartItemList: [
        {
          id: '0001',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          count: 1,
          volume: '12343',
          price: 1,
          checked: false
        }, {
          id: '0002',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          count: 1,
          volume: '12343',
          price: 2,
          checked: false
        }, {
          id: '0003',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          count: 1,
          checked: false,
          volume: '12343',
          price: 3
        }, {
          id: '0004',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          count: 1,
          volume: '12343',
          price: 4,
          checked: false
        }, {
          id: '0006',
          imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
          desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
          count: 1,
          volume: '12343',
          price: 5,
          checked: false
        }
      ]
    }
  },
  components: {
    CartHeader,
    CartList,
    CartTotal,
    HomeFooter
  },
  methods: {
    // 1.单个商品的加减
    handleCountMinusOrAdd (flag, index) {
      if (flag) { // 加
        this.CartItemList[index].count++
      } else { // 减
        if (this.CartItemList[index].count > 1) {
          this.CartItemList[index].count--
        }
      }
    },
    // 2.单个商品的选中
    handleIsSelectSingle (flag, index) {
      this.CartItemList[index].checked = !flag
    },
    // 3.全部选中和全部取消
    handleIsSelectAll (flag) {
      this.CartItemList.forEach((item, index) => {
        this.CartItemList[index].checked = flag
      })
    },
    // 计算
    handleAllPrice (index) {
      if (this.CartItemList[index].checked) {
        this.sum += parseInt(this.CartItemList[index].count) * parseFloat(this.CartItemList[index].price)
      } else if (this.CartItemList[index].checked) {
        this.sum -= parseInt(this.CartItemList[index].count) * parseFloat(this.CartItemList[index].price)
      }
      console.log(this.sum)
    }
  }
}
</script>

<style scoped>

</style>
