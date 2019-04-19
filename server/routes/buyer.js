let express = require('express')
// let mysql = require('mysql')
let dbConfig = require('../db/dbConfig')
let user = require('../db/userSQL')

let router = express.Router()

// dbConfig.connect()

// 注册
router.post('/reg', function (req, res) {
  let params = req.body
  console.log(params)
  dbConfig.query(user.buyer_queryById, [params.buyer_id], (err, result) => {
    console.log(result)
    if (err) throw err
    else {
      // 从数据库查询该用户id是否是被注册
      if (result.length !== 0) {
        res.send({
          status: 1,
          msg: '该用户名已经被注册了'
        })
        res.end()
      } else if (result.length === 0) {
        let userInfo = [
          params.buyer_id,
          params.buyer_pwd,
          params.buyer_name,
          params.buyer_address,
          params.buyer_phone
        ]
        dbConfig.query(user.buyerReg_insert, userInfo, (err, result) => {
          console.log(result)
          if (err) throw err
          else {
            res.send({
              params,
              status: 0,
              msg: '注册成功',
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
  dbConfig.query(user.buyer_login_step1, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      if (result.length === 0) {
        res.send({
          status: 1,
          msg: '该用户名未被注册，请先注册~'
        })
        res.end()
      } else {
        dbConfig.query(user.buyer_login_step2, [params.buyer_id, params.buyer_pwd], (err, result) => {
          if (err) throw err
          else {
            if (result.length === 0) {
              res.send({
                status: 2,
                msg: '用户名或者密码错误！'
              })
              res.end()
            } else {
              res.send({
                status: 0,
                result,
                msg: '登录成功~'
              })
              res.end()
            }
          }
        })
      }
    }
  })
})

// 获取全部商品
router.post('/getGoods', function (req, res) {
  dbConfig.query(user.buyer_get_all_goods, (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '获取所有商品成功！'
      })
    }
  })
})

// 获取低价商品
router.post('/getMinimumPrice', function (req, res) {
  dbConfig.query(user.buyer_get_minimum_price, (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '获取所有低价商品！'
      })
    }
  })
})

// 获取推荐商品（销量最高，评分最高，价钱最低）
router.post('/getRecommondItem', function (req, res) {
  dbConfig.query(user.buyer_get_recommend, (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '获取所有推荐商品！'
      })
    }
  })
})

// 获取VIP商品（轮播组件）
router.post('/getSwiper', function (req, res) {
  dbConfig.query(user.buyer_get_swiper, (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '获取vip商品！'
      })
    }
  })
})


module.exports = router
