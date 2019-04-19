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

module.exports = router
