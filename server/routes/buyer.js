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

// 加入购物车
router.post('/addCart', function (req, res) {
  let params = req.body
  // 1.在所有数据中，找到商品id符合的这一条数据
  dbConfig.query(user.selectAllGoods,[params.goods_id], (err,result1) => {
    if (err) throw err
    else {
      // 2.在购物车表中寻找是否含有符合商品id的数据（判断该商品是否已经存在于购物车中
      dbConfig.query(user.select_from_cart, [params.goods_id], (err, result2) => {
        if (err) throw err
        else {
          //3.如果购物车中存在该条数据，则数量+1
          if (result2.length === 1) {
            dbConfig.query(user.add_cart_count, [params.goods_id], (err, result4) => {
              if (err) throw err
              else {
                res.send({
                  status: 0,
                  result4,
                  msg: '该商品成功+1！'
                })
                res.end()
              }
            })
          } else if (result2.length === 0) {
          //  4.如果购物车中不存在该条数据，则插入该条数据
            let info = [
              params.buyer_id,
              result1[0].user_id,
              result1[0].goods_id,
              result1[0].goods_img,
              result1[0].goods_name,
              result1[0].goods_price,
              result1[0].goods_desc,
              result1[0].goods_notice,
              result1[0].goods_count,
              result1[0].goods_score,
              result1[0].goods_sale,
              result1[0].goods_checked,
              result1[0].goods_type
            ]
            dbConfig.query(user.add_cart, info, (err, result3) => {
              if (err) throw err
              else {
                res.send({
                  status: 0,
                  result3,
                  msg: '该商品成功加入购物车！'
                })
                res.end()
              }
            })
          }
        }
      })
    }
  })
})

// 获取购物车的长度
router.post('/cartList', function (req,res) {
  let params = req.body
  console.log(params)
  dbConfig.query(user.get_cart, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '获取所有购物车的商品！'
      })
    }
  })
})

// 购物车列表上面数量的增加（+1）
router.post('/countAdd', function (req, res) {
  let params = req.body
  // console.log(params)

  dbConfig.query(user.count_add, [params.goods_id], (err, result) => {
    if (err) throw err
    else {
      dbConfig.query(user.get_cart_item, [params.buyer_id, params.goods_id], (err, result) => {
        if (err) throw err
        else {
          res.send({
            status: 0,
            result,
            msg: '数量+1！'
          })
        }
      })
    }
  })
})

// 购物车列表上面数量的减少（-1）
router.post('/countMinus', function (req, res) {
  let params = req.body
  // console.log(params)

  dbConfig.query(user.count_minus, [params.goods_id], (err, result) => {
    if (err) throw err
    else {
      dbConfig.query(user.get_cart_item, [params.buyer_id, params.goods_id], (err, result) => {
        if (err) throw err
        else {
          res.send({
            status: 0,
            result,
            msg: '数量-1！'
          })
        }
      })
    }
  })
})

// 删除某条数据
router.post('/delGoods', function (req, res) {
  let params = req.body
  // console.log(params)

  dbConfig.query(user.delete_goods, [params.goods_id,params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      dbConfig.query(user.get_cart, [params.buyer_id], (err, result) => {
        if (err) throw err
        else {
          res.send({
            status: 0,
            result,
            msg: '删除成功'
          })
        }
      })
    }
  })
})

module.exports = router
