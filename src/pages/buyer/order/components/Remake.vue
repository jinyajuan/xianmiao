<template>
  <div class="remake">
    <div class="content">
      <div>
        <label for="remake">备注：</label>
        <input id="remake" ref="buyer_remake" v-model="remake" type="text" placeholder="选填，先和商家协商一致">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderRemake',
  data () {
    return {
      remake: ''
    }
  },
  updated () {
    // console.log(this.$refs.buyer_remake.value)
    this.$store.state.BuyerRemake = this.$refs.buyer_remake.value
  }
}
</script>

<style scoped>
  .remake{
    padding: .15rem;
    background-color: #eeeeee;
  }
  .content{
    padding: .15rem;
    border-radius: .1rem;
    background-color: white;
  }

</style>
