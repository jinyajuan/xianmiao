<template>
  <ul class="bbb">
    <List :cartList="cartList"
          @countAddOne="handleCountAddOne"
          @countMinusOne="handleCountMinusOne"
    ></List>
  </ul>
</template>

<script>
import List from './components/list'
export default {
  name: 'Cart1',
  data () {
    return {
      cartList: [
        {
          id: '0001',
          name: '张1三',
          count: '11'
        }, {
          id: '0002',
          name: '张2三',
          count: '22'
        }, {
          id: '0003',
          name: '张3三',
          count: '33'
        }
      ]
    }
  },
  components: {
    List
  },

  methods: {
    handleCountAddOne (index) {
      console.log('+1', index)
      this.cartList[index].count++
    },
    handleCountMinusOne (index) {
      console.log('-1', index)
      this.cartList[index].count--
    }
  }
}
</script>

<style scoped>

</style>
