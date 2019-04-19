var user = {
  insert: 'INSERT INTO seller_reg (user_id,user_pwd,user_name,user_identify,user_phone,shop_name,shop_address) VALUES(?,?,?,?,?,?,?)', // 插入数据
  drop: 'DROP TABLE seller_reg', // 删除表中所有的数据
  queryAll: 'SELECT * FROM seller_reg', // 查找表中所有数据
  queryById: 'select * from seller_reg where user_id = ?',
  sellerLogin: 'select * from seller_reg where user_id = ? and user_pwd = ?',
  uploadGoods: 'INSERT INTO seller_upload_goods (user_id,goods_id, goods_img, goods_name,goods_price,goods_desc,goods_notice,goods_count,goods_score,goods_sale,goods_checked,goods_type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
  getSellerHomeGoods: 'select * from seller_upload_goods where user_id = ?',
  changeGoodsInfo: 'update seller_upload_goods set goods_img = ?,goods_price = ?, goods_name=?, goods_desc=?, goods_notice=?,goods_type=? where goods_id=?',
  getBaseInfo: 'select user_name,user_identify,shop_name,shop_address,user_phone from seller_reg where user_id=?',
  selectPassword: 'select user_pwd from seller_reg where user_id=?',
  changePassword: 'update seller_reg set user_pwd = ? where user_id=?',
  changePhone: 'update seller_reg set user_phone = ?,shop_name=?,shop_address=? where user_id=?',

  buyerReg_insert: 'insert into buyer_reg (buyer_id,buyer_pwd,buyer_name,buyer_phone,buyer_address) values (?,?,?,?,?)',
  buyer_queryById: 'select * from buyer_reg where buyer_id = ?',
  buyer_login_step2: 'select * from buyer_reg where buyer_id=? and buyer_pwd =?',
  buyer_login_step1: 'select * from buyer_reg where buyer_id =?',
  buyer_get_all_goods: 'select * from seller_upload_goods',
  buyer_get_minimum_price: 'select * from seller_upload_goods order by goods_price',
  buyer_get_recommend: 'select * from seller_upload_goods order by goods_sale desc,goods_score desc,goods_price asc',
  buyer_get_swiper: 'select * from seller_goods_vip'
}

module.exports = user
