<template>
  <div>
    <cart-header></cart-header>
    <cart-list
      @countMinusOrAdd="handleCountMinusOrAdd"
      @isSelectSingle="handleIsSelectSingle"
      @deleteGoods="ClickDeleteGoods"
    ></cart-list>
    <cart-total
      :totalPrice="totalPrice"
      :isSelectAll="isSelectAll"
      @goPay="handleGoPay"
      @handleIsSelectAll="handleIsSelectAll"
    ></cart-total>
    <home-footer></home-footer>
    <cart-delete-panel
      :isDeleteGoods="isDeleteGoods"
      @delGood="handleDeleteGood"
    >
    </cart-delete-panel>
    <cart-prompt
      :hasNoGoodsToPay="hasNoGoodsToPay"
      @delNoGoodsToPay="handleDelNoGoodsToPay">
    </cart-prompt>
  </div>
</template>

<script>
import CartHeader from '@/pages/buyer/cart/components/Header'
import CartList from '@/pages/buyer/cart/components/List'
import CartTotal from '@/pages/buyer/cart/components/Total'
import HomeFooter from '@/pages/buyer/home/components/Footer'
import CartDeletePanel from '@/pages/buyer/cart/components/Panel'
import CartPrompt from '@/pages/buyer/cart/components/Prompt'
export default {
  name: 'Cart',
  data () {
    return {
      // CartItemList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
      //     desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
      //     count: 1,
      //     volume: '12343',
      //     price: 1,
      //     checked: false
      //   }, {
      //     id: '0002',
      //     imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
      //     desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
      //     count: 1,
      //     volume: '12343',
      //     price: 2.01,
      //     checked: false
      //   }, {
      //     id: '0003',
      //     imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
      //     desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
      //     count: 1,
      //     checked: false,
      //     volume: '12343',
      //     price: 3.00
      //   }, {
      //     id: '0004',
      //     imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
      //     desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
      //     count: 1,
      //     volume: '12343',
      //     price: 4,
      //     checked: false
      //   }, {
      //     id: '0006',
      //     imgUrl: 'https://img14.360buyimg.com/babel/s180x180_jfs/t1/15492/22/10575/256417/5c8875d3Ecc98b5ce/d102b1ac792d19a8.jpg!q80.webp',
      //     desc: '壹农壹果 南非红心西柚 4个 单果250g-320g 葡萄柚 柚子水果 ',
      //     count: 1,
      //     volume: '12343',
      //     price: 5,
      //     checked: false
      //   }
      // ],
      isSelectAll: false,
      totalPrice: 0,
      isDeleteGoods: true,
      hasNoGoodsToPay: true,
      currentDeleteGoodIndex: {}
    }
  },
  components: {
    CartHeader,
    CartList,
    CartTotal,
    HomeFooter,
    CartPrompt,
    CartDeletePanel
  },
  methods: {
    // 1.单个商品的加减
    handleCountMinusOrAdd (flag, index) {
      // 1.1 商品数量的加减
      if (flag) { // 加
        this.$store.state.CartItemList[index].count++
      } else { // 减
        if (this.$store.state.CartItemList[index].count > 1) {
          this.$store.state.CartItemList[index].count--
        }
      }
      // 1.2  计算总价
      this.handleAllPrice()
    },
    // 2.单个商品的选中
    handleIsSelectSingle (flag, index) {
      // 2.1 商品选中或者取消
      this.$store.state.CartItemList[index].checked = !flag
      // 2.2计算总价
      this.handleAllPrice()
      //  2.3
      this.selectAll()
    },
    // 3.全部选中和全部取消
    handleIsSelectAll (flag) {
      // 3.1 全选按钮选中护着取消
      this.isSelectAll = flag
      // 3.2 全选按钮选中或者取消时对每个单选按钮的影响
      this.$store.state.CartItemList.forEach((item, index) => {
        this.$store.state.CartItemList[index].checked = flag
      })
      // 3.3 计算总价
      this.handleAllPrice()
    },
    // 4.计算
    handleAllPrice () {
      let totalPrice = 0
      // 遍历每一项，当选中的状态下进行计算
      this.$store.state.CartItemList.forEach((item) => {
        if (item.checked) {
          totalPrice += (parseInt(item.count) * (parseFloat(item.price).toFixed(2)))
        }
      })
      this.totalPrice = parseFloat(totalPrice.toFixed(2))
    },
    // 5 当所有的商品全部逐一选中时，全选按钮显示选中
    selectAll () {
      let selectFlag = true
      this.$store.state.CartItemList.forEach((item) => {
        if (!item.checked) {
          selectFlag = false
        }
      })
      this.isSelectAll = selectFlag
    },
    //  6. 点击×删除的时候，出现删除面板
    ClickDeleteGoods (index) {
      this.isDeleteGoods = false
      this.currentDeleteGoodIndex = index
    },
    //  7. 从数组中移除删除商品
    handleDeleteGood (flag) {
      if (flag) { // 确认删除
        //  7.1 清除删除面板
        this.isDeleteGoods = true
        //  7.2 删除对应的数组部分
        let index = this.currentDeleteGoodIndex
        this.$store.state.CartItemList.splice(index, 1)
        // 7.3 计算总价
        this.handleAllPrice()
      } else { // 取消删除
        this.isDeleteGoods = true
      }
    },
    //  8.付款时的跳转
    handleGoPay () {
      // 8.1 遍历购物车列表，将选中状态下的商品添加到CartItemListGoPay
      this.$store.state.CartItemList.forEach((item) => {
        if (item.checked) {
          this.$store.state.CartItemListGoPay.push(item)
        }
      })

      console.log(this.$store.state.CartItemList)
      console.log(this.$store.state.CartItemListGoPay)
      // 8.2 判断CartItemListGoPay的长度，当长度为0时，弹出提示，反之，跳转
      if (this.$store.state.CartItemListGoPay.length === 0) {
        this.hasNoGoodsToPay = false
      } else {
        this.$router.push('/buyer/order')
      }
    },
    //  9. 处理弹出面板的消失
    handleDelNoGoodsToPay () {
      this.hasNoGoodsToPay = true
    }
  }
}
</script>

<style scoped>

</style>
