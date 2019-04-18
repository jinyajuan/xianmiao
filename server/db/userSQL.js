var user = {
  insert: 'INSERT INTO seller_reg (user_id,user_pwd,user_name,user_identify,user_phone,shop_name,shop_address) VALUES(?,?,?,?,?,?,?)', // 插入数据
  drop: 'DROP TABLE seller_reg', // 删除表中所有的数据
  queryAll: 'SELECT * FROM seller_reg', // 查找表中所有数据
  queryById: 'select * from seller_reg where user_id = ?',
  sellerLogin: 'select * from seller_reg where user_id = ? and user_pwd = ?',
  // uploadGoods: 'insert into seller_upload_goods (user_id,goods_id, goods_img, goods_name,goods_price,goods_desc,goods_notice,goods_count,goods_score,goods_sale,goods_checked) values (?,?,?,?,?,?,?,?,?,?,?)'
  uploadGoods: 'INSERT INTO seller_upload_goods (user_id,goods_id, goods_img, goods_name,goods_price,goods_desc,goods_notice,goods_count,goods_score,goods_sale,goods_checked) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
  getSellerHomeGoods: 'select * from seller_upload_goods where user_id = ?',
  changeGoodsInfo: 'update seller_upload_goods set goods_img = ?,goods_price = ?, goods_name=?, goods_desc=?, goods_notice=? where goods_id=?',
  getBaseInfo: 'select user_name,user_identify,shop_name,shop_address,user_phone from seller_reg where user_id=?',
  selectPassword: 'select user_pwd from seller_reg where user_id=?',
  changePassword: 'update seller_reg set user_pwd = ? where user_id=?',
  changePhone: 'update seller_reg set user_phone = ?,shop_name=?,shop_address=? where user_id=?'
}

module.exports = user
