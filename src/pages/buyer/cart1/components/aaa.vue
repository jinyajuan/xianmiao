<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="60px"></el-table-column>
              <el-table-column prop="price" label="单价" width="60px"></el-table-column>
              <el-table-column  label="操作" width="100px" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="deleteSingleGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  <!--在添加一行的时候，需要给addOrderList传入scope.row，这是element的写法-->
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>{{totalCount}}
              &nbsp;&nbsp;&nbsp;
              <small>金额：</small>{{totalMoney}}元

            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods()">删除</el-button>
              <el-button type="success" @click="checkout()">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="主食">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" height="100%" alt="">
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" height="100%" alt="">
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" height="100%" alt="">
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">{{goods.goodsPrice}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)"npm>
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" height="100%" alt="">
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "pos",
  data(){
    return {
      tableData:[],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalMoney:0,
      totalCount:0
    }
  },
  created:function () {
    axios.get("http://old.jspang.com/DemoApi/oftenGoods.php")
      .then(reponse=>{
        // console.log(reponse);
        this.oftenGoods=reponse.data;
      })
      .catch(error=>{
        // console.log(error)
        alert("抱歉，网络错误，不能访问！")
      })
    axios.get("http://old.jspang.com/DemoApi/typeGoods.php")
      .then(reponse=>{
        console.log(reponse);
        this.type0Goods=reponse.data[0];
        this.type1Goods=reponse.data[1];
        this.type2Goods=reponse.data[2];
        this.type3Goods=reponse.data[3];
      })
      .catch(error=>{
        // console.log(error)
        alert("抱歉，网络错误，不能访问！")
      })
  },
  mounted: function () {
    var orderHeight=document.body.clientHeight;
    document.getElementById('order-list').style.height=orderHeight+'px';
  },
  methods:{
    //添加单个商品
    addOrderList(goods){
      this.totalMoney=0
      this.totalCount=0
      //判断商品是否在订单页面中
      let isHave=false;
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId==goods.goodsId){
          isHave=true
        }
      }
      if(isHave){
        let arr=this.tableData.filter(a=>a.goodsId==goods.goodsId);
        arr[0].count++;
      }else{
        let newGoods={
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          goodsPrice:goods.price,
          count:1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney()
    },
    //删除单个商品
    deleteSingleGoods(goods){
      this.tableData=this.tableData.filter(o => o.goodsId!=goods.goodsId);
      this.getAllMoney()
    },
    //模拟结账
    checkout(){
      if(this.totalCount!=0){
        this.totalMoney=0;   //进行清零，如果不进行清零，会一直累加
        this.totalCount=0;
        this.tableData=[];
        this.$message({
          message:'结账成功，感谢您光临小店~',
          type:'success'
        })
      }else{
        this.$message.error('不能空结账，请先点餐~')
      }
    },
    //汇总数量金额，进行重计算
    getAllMoney(){
      this.totalMoney=0;   //进行清零，如果不进行清零，会一直累加
      this.totalCount=0;
      if(this.tableData) {//当数组有值的时候
        //计算汇总的数量和价格
        this.tableData.forEach((element)=>{
          this.totalCount+=element.count;
          this.totalMoney=this.totalMoney+(element.goodsPrice * element.count)
        })
      }
    },
    //删除所有的商品
    delAllGoods(){
      this.tableData=[],
        this.totalMoney=0,
        this.totalCount=0
    }
  }
}
</script>

<style scoped>
</style>
