let express = require('express')
let mysql = require('mysql')
let dbConfig = require('../db/dbConfig')
let user = require('../db/userSQL')
let md5 = require('md5-node')

let router = express.Router()

// 使用DBConfig.js的配置信息创建一个MySql链接池
// let connection = mysql.createConnection(dbConfig.mysql)
// connection.connect()
dbConfig.connect()

// 注册
router.post('/reg', function (req, res) {
  let params = req.body

  dbConfig.query(user.queryById, [params.user_id], (err, result) => {
    // console.log(result);
    if (err) throw err
    else {
      // 从数据库查询该用户id是否是被注册
      if( result.length !== 0) {
        res.send({
          status: 1,
          msg: '该用户名已经被注册了,请重新注册~'
        })
        res.end()
      } else if (result.length === 0) {
        let userInfo = [
          params.user_id,
          params.user_pwd,
          params.user_name,
          params.user_identify,
          params.user_phone,
          params.shop_name,
          params.shop_address
        ];
        dbConfig.query(user.insert, userInfo, (err, result) => {
          // console.log(result);
          if(err) throw err
          else {
            res.send({
              params,
              status:0,
              message: '注册成功',
              result
            })
            res.end()
          }
        })
      }
    }
  })
})
// 登录
router.post('/login', function (req, res) {
  let params = req.body
  // console.log(params);
  dbConfig.query(user.queryById, [params.user_id], (err, result) => {
    if (err) throw err
    else {
      // 从数据库查询该用户id是否是被注册
      if( result.length === 0) {
        res.send({
          status: 2,
          msg: '该用户名未被注册！'
        })
        res.end()
      } else {  // 存在该用户名
        let aa = result[0]

        if(aa.user_id === params.user_id && aa.user_pwd === params.user_pwd) {
          res.send({
            status:0,
            msg: '登录成功~'
          })
          res.end()
        } else {
          res.send({
            status:1,
            msg: '用户名或者密码错误！',
          })
          res.end()
        }
      }
    }
  })
})
// 上传商品
router.post('/uploadGoods',function (req, res) {
  let params = req.body
  console.log(params);
  let goodsInfo= [
    params.user_id,
    params.goods_id,
    params.goods_img,
    params.goods_name,
    params.goods_price,
    params.goods_desc,
    params.goods_notice,
    params.goods_count,
    params.goods_score,
    params.goods_sale,
    params.goods_checked,
    params.goods_type
  ]

  dbConfig.query(user.uploadGoods, goodsInfo, (err, result) => {
    console.log(result)
    if(err) throw err
    else {
      res.send({
        status: 0,
        msg: '商品上传成功！'
      })
      res.end()
    }
  })
})

router.post('/sellerHomeGoods',function (req, res) {
  let params = req.body
  // console.log(params)

  dbConfig.query(user.getSellerHomeGoods, [params.user_id], (err, result) => {
    // console.log(result)
    if(err) throw err
    else {
      if(result.length === 0) {
        res.send({
          status: 1,
          msg: '没有找到数据！'
        })
        res.end()
      } else {
        res.send({
          status: 0,
          result,
          msg: '数据查找成功！'
        })
        res.end()
      }

    }
  })
})

router.post('/changeGoodsInfo',function (req, res) {
  let params = req.body
  let changedInfo = [
    params.goods_img,
    params.goods_price,
    params.goods_name,
    params.goods_desc,
    params.goods_notice,
    params.goods_type,
    params.goods_id
  ]

  dbConfig.query(user.changeGoodsInfo, changedInfo, (err, result) => {
    // console.log(result)
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '商品信息修改成功~'
      })
      res.end()
    }
  })
})

router.post('/baseInfo',function (req, res) {
  let params = req.body

  dbConfig.query(user.getBaseInfo, [params.user_id], (err, result) => {
    // console.log(result)
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '找到卖家基本信息'
      })
      res.end()
    }
  })
})

router.post('/selectPassword', function (req, res) {
  let params = req.body

  dbConfig.query(user.selectPassword, [params.user_id], (err, result) => {
    console.log(result)
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '密码寻找成功~'
      })
      res.end()
    }
  })
})

//修改密码
router.post('/changePassword', function (req, res) {
  let params = req.body
  // console.log(params)

  dbConfig.query(user.changePassword, [params.user_pwd, params.user_id], (err, result) => {
    console.log(result)
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '密码修改成功~'
      })
      res.end()
    }
  })
})

// 修改电话号码
router.post('/changePhone', function (req, res) {
  let params = req.body
  // console.log(params)

  dbConfig.query(user.changePhone, [params.user_phone,params.shop_name,params.shop_address, params.user_id], (err, result) => {
    // console.log(result)
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '其他信息修改成功~'
      })
      res.end()
    }
  })
})

// 获取所有订单
router.post('/getOrder', function (req, res) {
  let params = req.body

  dbConfig.query(user.getOrder,[params.user_id],(err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '获取到所有订单信息',
        result
      })
      res.end()
    }
  })
})

// 获取订单详细信息
router.post('/getOrderDetail', function (req, res) {
  let params = req.body

  dbConfig.query(user.getOrderDetail, [params.user_id,params.create_time], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '订单详细信息',
        result
      })
      res.end()
    }
  })
})

// 确认接单
router.post('/acceptOrder', function (req, res) {
  let params = req.body

  dbConfig.query(user.acceptOrder,[params.create_time], (err,result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '确认订单并且安排出货',
        result
      })
    }
  })
})

module.exports = router
