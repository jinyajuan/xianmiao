<template>
  <div class="panel " v-bind:class="{'switch-hide': switchPanel}">
    <div class="close">
      <span class="iconfont" @click="closeSwitchPanel">&#xe606;</span>
    </div>
    <div class="panel_content">
      <div class="panel_title">
        请选择一下身份切换
      </div>
      <div class="panel_footer">
        <button class="cancel">管理员</button>
        <router-link to="/seller/login">
          <button class="submit">卖家</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeSwitch',
  props: {
    switchPanel: Boolean
  },
  methods: {
    closeSwitchPanel () {
      this.$emit('closeSwitchPanel')
    }
  }
}
</script>

<style scoped>
  .switch-hide {
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
  .close{
    /*background-color: #55a532;*/
    margin-top: 1.1rem;
    text-align: right;
    margin-right: .2rem;
  }
  .iconfont{
    color: red;
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
