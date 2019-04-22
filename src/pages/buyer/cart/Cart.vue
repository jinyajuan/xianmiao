<template>
  <div>
    <cart-header></cart-header>
    <cart-list
      :CartItemList = CartItemList
      @countMinusOrAdd="handleCountMinusOrAdd"
      @deleteGoods="handleDeleteGoods"
      @isSelectSingle="handleIsSelectSingle"
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
import axios from 'axios'
export default {
  name: 'Cart',
  data () {
    return {
      hasNoGoodsToPay: true,
      isDeleteGoods: true,
      isSelectAll: false,
      totalPrice: 0,
      CartItemList: [],
      currentDeleteGoodIndex: '',
      check_flag: []
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
    // *1.单个商品的加减
    handleCountMinusOrAdd (flag, index) {
      // 1.1将所有购物车内商品的选中情况做一个暂存
      for (let i = 0; i < this.CartItemList.length; i++) {
        this.check_flag[i] = this.CartItemList[i].goods_checked
      }
      // console.log(this.check_flag)
      // 1.2 商品数量的加减
      if (flag) { // 加
        axios.post('/buyer/countAdd', {
          goods_id: this.CartItemList[index].goods_id,
          buyer_id: sessionStorage.getItem('buyer_login_state')
        }).then((response) => {
          let res = response.data
          if (res.status === 0) {
            // 1.3 将数据库内的新数据复制给购物车
            // console.log(res)
            this.CartItemList = res.result2
            // 1.4.将暂存数据赋值给购物车
            for (let j = 0; j < this.CartItemList.length; j++) {
              this.CartItemList[j].goods_checked = this.check_flag[j]
            }
            // 1.5 计算总价
            this.handleAllPrice()
          }
        })
      } else { // 减
        if (this.CartItemList[index].goods_count > 1) {
          axios.post('/buyer/countMinus', {
            goods_id: this.CartItemList[index].goods_id,
            buyer_id: sessionStorage.getItem('buyer_login_state')
          }).then((response) => {
            let res = response.data
            if (res.status === 0) {
              // 1.3 将数据库内的新数据复制给购物车
              this.CartItemList = res.result2
              // 1.4 将暂存数据赋值给购物车
              for (let j = 0; j < this.CartItemList.length; j++) {
                this.CartItemList[j].goods_checked = this.check_flag[j]
              }
              // 1.5 计算总价
              this.handleAllPrice()
            }
          })
        } else {
          alert('数量不能小于1！')
        }
      }
    },
    // *2.单个商品的选中
    handleIsSelectSingle (flag, index) {
      // 2.1 商品选中或者取消
      this.CartItemList[index].goods_checked = !flag
      // 2.2计算总价
      this.handleAllPrice()
      //  2.3 全部单选之后选中“全选”按钮
      this.selectAll()
    },
    // *3.全部选中和全部取消
    handleIsSelectAll (flag) {
      // 3.1 全选按钮选中护着取消
      this.isSelectAll = flag
      // 3.2 全选按钮选中或者取消时对每个单选按钮的影响
      this.CartItemList.forEach((item, index) => {
        this.CartItemList[index].goods_checked = flag
      })
      // 3.3 计算总价
      this.handleAllPrice()
    },
    // *4.计算
    handleAllPrice () {
      let totalPrice = 0
      // 遍历每一项，当选中的状态下进行计算
      this.CartItemList.forEach((item) => {
        if (item.goods_checked) {
          totalPrice += item.goods_price * item.goods_count
        }
      })
      this.totalPrice = parseFloat(totalPrice.toFixed(2))
    },
    // *5 当所有的商品全部逐一选中时，全选按钮显示选中
    selectAll () {
      let selectFlag = true
      this.CartItemList.forEach((item) => {
        if (!item.goods_checked) {
          selectFlag = false
        }
      })
      this.isSelectAll = selectFlag
    },
    //  *6. 点击×删除的时候，出现删除面板
    handleDeleteGoods (index) {
      this.isDeleteGoods = false
      this.currentDeleteGoodIndex = index
    },
    //  *7. 从数组中移除删除商品
    handleDeleteGood (flag) {
      // 7.1将所有购物车内商品的选中情况做一个暂存
      for (let i = 0; i < this.CartItemList.length; i++) {
        this.check_flag[i] = this.CartItemList[i].goods_checked
      }
      if (flag) { // 确认删除
        //  7.2 清除删除面板
        this.isDeleteGoods = true
        // 7.3 获取删除下标
        let index = this.currentDeleteGoodIndex
        //  7.4 删除对应的数组部分
        axios.post('/buyer/delGoods', {
          goods_id: this.CartItemList[index].goods_id,
          buyer_id: sessionStorage.getItem('buyer_login_state')
        }).then((response) => {
          let res = response.data
          if (res.status === 0) {
            this.CartItemList = res.result
            for (let j = 0; j < this.CartItemList.length; j++) {
              this.CartItemList[j].goods_checked = this.check_flag[j]
            }
            // 1.5 计算总价
            this.handleAllPrice()

            alert(res.msg)
          }
        })
      } else { // 取消删除
        this.isDeleteGoods = true
      }
    },
    //  *8.付款时的跳转
    handleGoPay () {
      // 8.1 遍历购物车列表，将选中状态下的商品添加到CartItemListGoPay
      this.CartItemList.forEach((item) => {
        if (item.goods_checked) {
          this.$store.state.CartItemListGoPay.push(item)
        }
      })

      // console.log(this.$store.state.CartItemListGoPay)
      // 8.2 判断CartItemListGoPay的长度，当长度为0时，弹出提示，反之，跳转
      if (this.$store.state.CartItemListGoPay.length === 0) {
        this.hasNoGoodsToPay = false
      } else {
        this.$router.push('/buyer/order')
      }
      // console.log(this.$store.state.CartItemListGoPay)
    },
    //  *9. 处理弹出面板的消失
    handleDelNoGoodsToPay () {
      this.hasNoGoodsToPay = true
    }
  },
  mounted () {
    // 1. 获取所有购物车内的商品
    axios.post('/buyer/cartList', {
      buyer_id: sessionStorage.getItem('buyer_login_state')
    }).then((response) => {
      let res = response.data
      if (res.status === 0) {
        this.CartItemList = res.result
        // alert(res.msg)
        for (let i = 0; i < this.CartItemList.length; i++) {
          if (this.CartItemList[i].goods_checked === 0) {
            this.CartItemList[i].goods_checked = Boolean(this.CartItemList[i].goods_checked)
          }
        }
      }
    })
  }
}
</script>

<style scoped>

</style>
