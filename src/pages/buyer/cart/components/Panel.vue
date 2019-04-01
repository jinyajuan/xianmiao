<template>
  <div class="panel " v-bind:class="{'panel-is-hide': isDeleteGoods}">
    <div class="panel_content">
      <div class="panel_title">
        您确认要删除该商品吗？
      </div>
      <div class="panel_footer">
        <button class="cancel" @click="delGood(false)">取消</button>
        <button class="submit" @click="delGood(true)">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'isDeleteGoods',
  props: {
    isDeleteGoods: Boolean
  },
  methods: {
    delGood (flag) {
      this.$emit('delGood', flag)
    }
  }
}
</script>

<style scoped>
  .panel-is-hide {
    display: none;
  }
  .panel {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
  }
  .panel_content {
    width: 84%;
    position: absolute;
    left: 8%;
    top: 4rem;
    box-sizing: border-box;
    background-color: #fff;
    border: .01rem solid #e0e0e0;
    border-radius: .05rem;
    padding: .15rem;
  }
  .panel_title {
    text-align: center;
    font-size: .38rem;
    padding-bottom: .4rem;
    border-bottom: .01rem solid #e0e0e0;
    margin-bottom: .2rem;
  }
  .panel_footer {
    width: 100%;
    height: 1rem;
    /* background-color: green; */
  }
  .panel_footer .cancel {
    float: left;
  }
  .panel_footer button {
    border: 0;
    width: 2rem;
    height: .8rem;
  }
  .panel_footer .submit {
    float: right;
    background-color: #E9232C;
    color: #fff;
    border: none;
  }
</style>
