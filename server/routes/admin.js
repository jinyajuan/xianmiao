let express = require('express')
// let mysql = require('mysql')
let dbConfig = require('../db/dbConfig')
let user = require('../db/userSQL')
let md5 = require('md5-node')

let router = express.Router()

// 登录
router.post('/login', function (req, res) {
  let params = req.body
  dbConfig.query(user.admin_login1, [params.admin_id], (err, result) => {
    if (err) throw err
    else {
      if (result.length === 0) {
        res.send({
          status: 1,
          msg: '该管理员未被授权~'
        })
        res.end()
      } else {
        dbConfig.query(user.admin_login2, [params.admin_id, md5(params.admin_pwd)], (err, result) => {
          if (err) throw err
          else {
            if (result.length === 0) {
              res.send({
                status: 2,
                msg: '账号或者密码错误！'
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

// 买家信息管理
router.post('/buyerManage', function (req, res) {
  let params = req.body

  dbConfig.query(user.admin_buyer_manage, (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '所有买家信息',
        result
      })
    }
  })
})

// 卖家信息管理orderManage
router.post('/sellerManage', function (req, res) {
  let params = req.body

  dbConfig.query(user.admin_seller_manage, (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '卖家信息',
        result
      })
      res.end()
    }
  })
})

// 订单信息管理
router.post('/orderManage', function (req, res) {
  let params = req.body

  dbConfig.query(user.admin_order_manage, (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '订单信息',
        result
      })
      res.end()
    }
  })
})

module.exports = router
