<template>
  <div class="center">
    <div class="tab-bar border-bottom">
      <span class="tab-bar-item"
         @click="tab(index)"
         v-for="(item,index) in tabBarItems" :key="item.id"
         :class="{active : index===curId}"
      >{{item.item}}</span>
    </div>
    <div class="tab-con">
      <ul class="all" style="display: block">
        <li class="order-item border-bottom" v-for="(item) in tabContents" :key="item.id">
          <router-link :to="{path:'/seller/detail',query: {state: item.order_state}}">
            <span>订单编号:{{item.order_id}},</span>
            <span>商品名称:{{item.goods_name}}</span>
            <span class="iconfont" v-show="item.order_state">&#xe631;</span>
          </router-link>
        </li>
      </ul>
      <ul class="hasNoHandle" style="display: none">
        <li class="order-item border-bottom"
              v-for="(item) in tabContentsHasNo" :key="item.id">
            <router-link :to="{path:'/seller/detail',query: {state: item.order_state}}">
              <span>订单编号:{{item.order_id}},</span>
              <span>商品名称:{{item.goods_name}}</span>
              <span class="iconfont" v-show="item.order_state">&#xe631;</span>
            </router-link>
        </li>
      </ul>
      <ul class="hasHandled" style="display: none">
          <li class="order-item border-bottom"
              v-for="(item) in tabContentsHasAlready" :key="item.id">
            <router-link :to="{path:'/seller/detail',query: {state: item.order_state}}">
              <span>订单编号:{{item.order_id}},</span>
              <span>商品名称:{{item.goods_name}}</span>
              <span class="iconfont" v-show="item.order_state">&#xe631;</span>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  namd: 'OrderCenter',
  data () {
    return {
      curId: 0,
      ulList: [],
      tabBarItems: [
        {
          id: '0001',
          item: '全部'
        }, {
          id: '0002',
          item: '未接单'
        }, {
          id: '0003',
          item: '已接单'
        }
      ]
    }
  },
  props: {
    tabContents: Array,
    tabContentsHasNo: Array,
    tabContentsHasAlready: Array
  },
  methods: {
    tab (index) {
      this.curId = index
      // alert(index)
      this.ulList = document.querySelectorAll('ul')
      for (var i = 0; i < this.ulList.length; i++) {
        this.ulList[i].style.display = 'none'
        if (i === index) {
          this.ulList[index].style.display = 'block'
        }
      }
    }
  }
}
</script>

<style scoped>
  .center{
    width: 100%;
    margin: 1rem 0;
    /*background: orange;*/
  }
  .tab-bar {
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: space-around;
    /*background-color: #ccc;*/
  }
  .tab-bar-item {
    line-height: .6rem;
    font-size: .34rem;
  }
  .tab-bar .active {
    color: red;
    /*background-color: #0099ff;*/
  }
  .tab-con ul {
    margin: .2rem .15rem 1rem;
  }
  .order-item{
    height: .6rem;
    line-height: .6rem;
    font-size: .3rem;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iconfont{
    color: red;
    text-align: right;
  }

</style>
