<template>
  <div class="aaa">
    <ul class="ccc" v-for="(item, index) of this.cartList" :key="item.id">
      <li>
        <input type="checkbox" id="checkbox" v-model="item.checked">
      </li>
      <li  class="ddd" >{{item.id}}</li>
      <li>
        <button @click="addOne(index)">+</button>
        <span>{{item.count}}</span>
        <button @click="minusOne(index)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      checked: ''
    }
  },
  props: {
    cartList: Array
  },
  methods: {
    addOne (index) {
      this.$emit('countAddOne', index)
      // this.counter++
    },
    minusOne (index) {
      this.$emit('countMinusOne', index)
      // this.counter--
    }
  }
}
</script>

<style scoped>
  button{
    width: 100px;
    height: 30px;
  }
</style>
