let express = require('express')
// let mysql = require('mysql')
let dbConfig = require('../db/dbConfig')
let user = require('../db/userSQL')

let router = express.Router()

// 登录
router.post('/login', function (req, res) {
  let params = req.body
  console.log(params)
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
        dbConfig.query(user.admin_login2, [params.admin_id, params.admin_pwd], (err, result) => {
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

module.exports = router
