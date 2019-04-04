<template>
  <div>
    <order-header></order-header>
    <order-center :tabContents="tabContents"
                  :tabContentsHasNo="tabContentsHasNo"
                  :tabContentsHasAlready="tabContentsHasAlready"
    ></order-center>
    <home-footer></home-footer>
  </div>
</template>

<script>
import OrderHeader from '@/pages/seller/order/components/Header'
import OrderCenter from '@/pages/seller/order/components/Center'
import HomeFooter from '@/pages/seller/home/components/Footer'
export default {
  name: 'SellerOrder',
  data () {
    return {
      tabContents: [
        {
          order_id: '0001',
          order_state: true,
          goods_id: '321',
          goods_name: '苹果',
          goods_price: 22.2,
          goods_count: 2,
          goods_price_sum: 44.00,
          goods_desc: '这里不跟大家再去把Vue文档上的一些指令用法或者基础知识再复述一遍，既然是从入门到实战，我直接将平时项目中需要实现的一些效果拆分成模块。你们遇到了相关的指令或者不知道怎么用的方法自己对着文档去查，再回过头来看我的实现代码。记住，通读Vue文档真的很重要，很重要！',
          buyer_id: 'a12321d',
          buyer_name: '杨紫',
          buyer_phone: 1338909192,
          buyer_address: '湖南省湘潭市湘潭大学南苑13栋',
          buyer_remark: '圆通快递，谢谢~'
        }, {
          order_id: '0002',
          order_state: false,
          goods_id: '9028',
          goods_name: '苹果',
          goods_price: 22.222222222222,
          goods_desc: '这里不跟大家再去把Vue文档上的一些指令用法或者基础知识再复述一遍，既然是从入门到实战，我直接将平时项目中需要实现的一些效果拆分成模块。你们遇到了相关的指令或者不知道怎么用的方法自己对着文档去查，再回过头来看我的实现代码。记住，通读Vue文档真的很重要，很重要！',
          buyer_id: 'a12321d',
          buyer_name: '杨紫',
          buyer_phone: 1338909192,
          buyer_address: '湖南省湘潭市湘潭大学南苑13栋',
          buyer_remark: '圆通快递，谢谢~'
        }, {
          order_id: '0003',
          order_state: false,
          goods_id: '22101',
          goods_name: '苹果',
          goods_price: 22.222222222222,
          goods_desc: '这里不跟大家再去把Vue文档上的一些指令用法或者基础知识再复述一遍，既然是从入门到实战，我直接将平时项目中需要实现的一些效果拆分成模块。你们遇到了相关的指令或者不知道怎么用的方法自己对着文档去查，再回过头来看我的实现代码。记住，通读Vue文档真的很重要，很重要！',
          buyer_id: 'a12321d',
          buyer_name: '杨紫',
          buyer_phone: 1338909192,
          buyer_address: '湖南省湘潭市湘潭大学南苑13栋',
          buyer_remark: '圆通快递，谢谢~'
        }
      ],
      tabContentsHasNo: [],
      tabContentsHasAlready: []
    }
  },
  components: {
    OrderHeader,
    OrderCenter,
    HomeFooter
  },
  mounted () {
    this.tabContents.forEach((item) => {
      // 订单未接单
      if (item.order_state) {
        this.tabContentsHasNo.push(item)
      } else { // 订单已接单
        this.tabContentsHasAlready.push(item)
      }
    })
  }
}
</script>

<style scoped>

</style>
