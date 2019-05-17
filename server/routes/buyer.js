let express = require('express')
// let mysql = require('mysql')
let dbConfig = require('../db/dbConfig')
let user = require('../db/userSQL')
let md5 = require('md5-node')

let router = express.Router()

// dbConfig.connect()

// 注册
router.post('/reg', function (req, res) {
  let params = req.body
  console.log(params)

  dbConfig.query(user.buyer_queryById, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      // 从数据库查询该用户id是否是被注册
      if (result.length !== 0) {
        res.send({
          status: 1,
          msg: '该用户名已经被注册了,请重新注册！'
        })
        res.end()
      } else if (result.length === 0) {
        let userInfo = [
          params.buyer_id,
          md5(params.buyer_pwd),
          params.buyer_name,
          params.buyer_phone,
          params.buyer_address
        ]
        dbConfig.query(user.buyerReg_insert, userInfo, (err, result) => {
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
        let loginInfo = [
          params.buyer_id,
          md5(params.buyer_pwd)
        ]
        dbConfig.query(user.buyer_login_step2, loginInfo, (err, result) => {
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

// 获取默认推荐商品（销量最高，评分最高，价钱最低）
router.post('/getRecommondItem', function (req, res) {
  dbConfig.query(user.buyer_get_recommend, (err, result) => {
    // console.log(result)
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

// 获取默认推荐商品（销量最高，评分最高，价钱最低）ID 集合
router.post('/getRecommondItemID', function (req, res) {
  dbConfig.query(user.buyer_get_recommend_id, (err, result) => {
    console.log(result)
    if (err) throw err
    else {
      res.send({
        status: 0,
        result,
        msg: '获取所有推荐商品ID！'
      })
    }
  })
})

// 获取个性化推荐商品ID 集合（根据历史搜索记录）
router.post('/getUserRecommendItem', function (req, res) {
  let params = req.body
  let arr = []
  // 1.查找个人的历史搜索信息
  dbConfig.query(user.get_search_con, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      // 获取模糊查询的关键字
      for (let i = 0; i < result.length; i++) {
        let search_item = '%' + result[i].search_content + '%'
        // 模糊匹配数据库中的商品列表推荐部分
        dbConfig.query(user.search_item_to_recommend, [search_item], (err, result1) => {
          if (err) throw err
          else {
            if (result1.length !== 0) {
              for (var j = 0; j < result1.length;j++) {
                arr.push(result1[j].goods_id)
              }
            }
          }
          if (i === result.length - 1) {
            res.send({
              arr,
              status: 0,
              msg: '历史记录读取成功'
            })
          }
        })
      }
    }
  })
})

// 获取个性化商品所有信息
router.post('/getRecommendGoodsInfo', function (req, res) {
  let params = req.body
  console.log(params)
  let arr = []
  for (let i = 0; i < params.goods_ids.length; i++) {
    dbConfig.query(user.get_recommend_goods_info, [params.goods_ids[i]], (err, result) => {
      arr.push(result[0])
      // console.log(result[0])
      if (err) throw err
      else {
        if (i === params.goods_ids.length - 1) {
          res.send({
            arr,
            status: 0,
            msg: '获取个性推荐商品信息'
          })
        }
      }
    })
  }
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
      dbConfig.query(user.select_from_cart, [params.goods_id, params.buyer_id], (err, result2) => {
        if (err) throw err
        else {
          //3.如果购物车中存在该条数据，则数量+1
          if (result2.length === 1) {
            dbConfig.query(user.add_cart_count, [params.goods_id,params.buyer_id], (err, result4) => {
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

  dbConfig.query(user.count_add, [params.goods_id,params.buyer_id], (err, result1) => {
    if (err) throw err
    else {
      dbConfig.query(user.get_cart, [params.buyer_id], (err, result2) => {
        if (err) throw err
        else {
          res.send({
            status: 0,
            result2,
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

  dbConfig.query(user.count_minus, [params.goods_id, params.buyer_id], (err, result1) => {
    if (err) throw err
    else {
      dbConfig.query(user.get_cart, [params.buyer_id], (err, result2) => {
        if (err) throw err
        else {
          res.send({
            status: 0,
            result2,
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

// 获取收件人信息（订单顶部）
router.post('/getPersonal', function (req, res) {
  let params = req.body

  dbConfig.query(user.get_personal, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '获取收件人信息',
        result
      })
      res.end()
    }
  })
})

// 修改收件人信息
router.post('/changePersonalInfo', function (req, res) {
  let params = req.body

  dbConfig.query(user.set_personal, [params.buyer_name,params.buyer_phone,params.buyer_address,params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '成功修改收件人信息',
        result
      })
      res.end()
    }
  })
})

// 去付款（下单成功）
router.post('/goPay', function (req, res) {
  let params = req.body
  // console.log(params.buyer_remake)
  for (let i = 0; i < params.goods_list.length; i++) {
    // 1.修改所有商品的商品销售记录（先销售=原始销售+本次数量）
    dbConfig.query(user.change_sale,[params.goods_list[i].goods_count, params.goods_list[i].goods_id,], (err,data) => {
      if (err) throw err
      else {
      //  2.根据user_id找出卖家的详细信息
        dbConfig.query(user.select_seller, [params.goods_list[i].user_id] , (err, sellerInfo) => {
          if (err) throw err
          else {
            // 3.根据buyer_id找出买家所有的详细信息
            dbConfig.query(user.select_buyer, [params.goods_list[i].buyer_id], (err, buyerInfo) => {
              if (err) throw err
              else {
                //4.根据goods_id找到商品的详细信息
                dbConfig.query(user.select_goods,[params.goods_list[i].goods_id],(err,goodsInfo) => {
                  if (err) throw err
                  else {
                    // 5.将所有需要的数据数据放入数组之中
                    let orderInfo = [
                      (new Date()).getTime(),
                      sellerInfo[0].user_id,
                      sellerInfo[0].user_name,
                      sellerInfo[0].user_identify,
                      sellerInfo[0].user_phone,
                      sellerInfo[0].shop_address,
                      sellerInfo[0].shop_name,
                      goodsInfo[0].goods_id,
                      goodsInfo[0].goods_img,
                      goodsInfo[0].goods_price,
                      goodsInfo[0].goods_count,
                      goodsInfo[0].goods_name,
                      goodsInfo[0].goods_desc,
                      goodsInfo[0].goods_notice,
                      goodsInfo[0].goods_score,
                      goodsInfo[0].goods_sale,
                      goodsInfo[0].goods_checked,
                      goodsInfo[0].goods_type,
                      buyerInfo[0].buyer_id,
                      buyerInfo[0].buyer_name,
                      buyerInfo[0].buyer_address,
                      buyerInfo[0].buyer_phone,
                      goodsInfo[0].goods_price* goodsInfo[0].goods_count,
                      params.buyer_remake
                    ]
                    // console.log(orderInfo)
                    dbConfig.query(user.create_order, orderInfo, (err, result) => {
                      if (err) throw err
                      else {
                        if (i === params.goods_list.length-1) {
                          res.send({
                            status: 0,
                            result,
                            msg: '购买成功'
                          })
                          res.end()
                        }
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})

// 获取个人历史订单
router.post('/getOrder', function (req, res) {
  let params = req.body
  console.log(params)
  dbConfig.query(user.get_history_order, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '获取到个人所有订单',
        result
      })
      res.end()
    }
  })
})

// 获取订单详情
router.post('/getOrderDetail', function (req, res) {
  let params = req.body
  dbConfig.query(user.get_order_detail, [params.create_time], (err, result) => {
    if (err) throw err
    else {
      res.send({
        msg: '获取到订单详情',
        status: 0,
        result
      })
      res.end()
    }
  })
})

// 直接购买
router.post('/buyImmediately', function (req, res) {
  let params = req.body
  // console.log(params)

  dbConfig.query(user.selectAllGoods, [params.goods_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '直接购买',
        result
      })
    }
  })
})

// 检索关键字商品
router.post('/searchGoods', function (req, res) {
  let params = req.body
  console.log(params.search_content)

  dbConfig.query(user.search_item, ["%" + params.search_content + "%"], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '成功查找搜索的商品信息',
        result
      })
      res.end()
    }
  })
})

// 搜索内容记录插入数据库
router.post('/searchRecommend', function (req, res) {
  let params = req.body

  dbConfig.query(user.add_search, [params.search_id, params.search_content, params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '搜索内容以及插入数据库',
        result
      })
    }
  })
})

// 搜索属于自己的历史搜索记录（搜索页面的历史搜索内容显示在历史记录里面）
router.post('/searchHistory', function (req, res) {
  let params = req.body

  dbConfig.query(user.select_search_history, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '显示在历史搜索记录',
        result
      })
      res.end()
    }
  })
})

// 推荐页面需要使用的搜索内容
router.post('/searchHistoryToRecommend', function (req, res) {
  let params = req.body

  dbConfig.query(user.search_history, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      res.send({
        status: 0,
        msg: '显示在历史搜索记录',
        result
      })
      res.end()
    }
  })
})

// 删除历史记录
router.post('/deteleSearch', function (req, res) {
  let params = req.body

  dbConfig.query(user.delete_history, [params.buyer_id], (err, result) => {
    if (err) throw err
    else {
      dbConfig.query(user.select_search_history, [params.buyer_id], (err, result) => {
        if (err) throw err
        else {
          res.send({
            msg: '历史记录删除成功！',
            status: 0,
            result
          })
          res.end()
        }
      })
    }
  })
})
// router.post('/hotCity', function (req, res) {
//   let params = req.body
//   console.log(params.hotCities)
//   console.log(params.hotCities.length)
//   for (var i=0;i<params.hotCities.length;i++) {
//     dbConfig.query(user.addCity,[params.hotCities[i].id,params.hotCities[i].spell,params.hotCities[i].name],(err,result) => {
//       if (err) throw err
//       else {
//         console.log(result)
//         if (i === params.hotCities.length - 1) {
//           res.send({
//             status: 0,
//             msg: '热门城市',
//             result
//           })
//         }
//       }
//     })
//   }
// })
// router.post('/allCity', function (req, res) {
//   let params = req.body
//   console.log(params.cities)
//   console.log(params.cities.length)
//   for (var i=0;i<params.cities.length;i++) {
//     // console.log(params.cities."A")
//     console.log(params.cities.[A])
//     // dbConfig.query(user.addCity,[params.cities[i].id,params.cities[i].spell,params.cities[i].name],(err,result) => {
//     //   if (err) throw err
//     //   else {
//     //     console.log(result)
//     //     if (i === params.cities.length - 1) {
//     //       res.send({
//     //         status: 0,
//     //         msg: '热门城市',
//     //         result
//     //       })
//     //     }
//     //   }
//     // })
//   }
// })

module.exports = router
