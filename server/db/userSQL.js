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
  getOrder: 'select * from order_copy where user_id=?',
  getOrderDetail: 'select * from order_copy where user_id=? and create_time=?',
  acceptOrder: 'update order_copy set goods_checked = 1 where create_time=?',

  buyerReg_insert: 'insert into buyer_reg (buyer_id,buyer_pwd,buyer_name,buyer_phone,buyer_address) values (?,?,?,?,?)',
  buyer_queryById: 'select * from buyer_reg where buyer_id = ?',
  buyer_login_step2: 'select * from buyer_reg where buyer_id=? and buyer_pwd =?',
  buyer_login_step1: 'select * from buyer_reg where buyer_id =?',
  buyer_get_all_goods: 'select * from seller_upload_goods',
  buyer_get_minimum_price: 'select * from seller_upload_goods order by goods_price',
  buyer_get_recommend: 'select * from seller_upload_goods order by goods_sale desc,goods_score desc,goods_price asc',
  buyer_get_recommend_id: 'select goods_id from seller_upload_goods order by goods_sale desc,goods_score desc,goods_price asc',
  buyer_get_swiper: 'select * from seller_goods_vip',
  selectAllGoods: 'select * from seller_upload_goods where goods_id=?',
  select_from_cart: 'select * from buyer_cart where goods_id=? and buyer_id=?',
  add_cart: 'INSERT INTO buyer_cart (buyer_id,user_id,goods_id, goods_img, goods_name,goods_price,goods_desc,goods_notice,goods_count,goods_score,goods_sale,goods_checked,goods_type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
  add_cart_count: 'update buyer_cart set goods_count=goods_count+1 where goods_id=? and buyer_id=?',
  get_cart: 'select * from buyer_cart where buyer_id=?',
  get_cart_item: 'select * from buyer_cart where buyer_id=? and goods_id=?',
  count_add: 'update buyer_cart set goods_count=goods_count+1 where goods_id=? and buyer_id=?',
  count_minus: 'update buyer_cart set goods_count=goods_count-1 where goods_id=? and buyer_id=?',
  delete_goods: 'delete from buyer_cart where goods_id=? and buyer_id=?',
  get_search_con: 'select search_content from buyer_search where buyer_id  = ?',
  search_item_to_recommend: 'select goods_id from seller_upload_goods where goods_name like ?',
  get_recommend_goods_info: 'select * from seller_upload_goods where goods_id = ?',

  get_personal: 'select * from buyer_reg where buyer_id=?',
  set_personal: 'update buyer_reg set buyer_name=?,buyer_phone=?,buyer_address=? where buyer_id=?',

  select_seller: 'select * from seller_reg where user_id=?',
  select_buyer: 'select * from buyer_reg where buyer_id=?',
  select_goods: 'select * from seller_upload_goods where goods_id=?',
  change_sale: 'update seller_upload_goods set goods_sale=goods_sale+? where goods_id=?',
  create_order: 'insert into order_copy (create_time,user_id,user_name,user_identify,user_phone,shop_address,shop_name,goods_id,goods_img,goods_price,goods_count,goods_name,goods_desc,goods_notice,goods_score,goods_sale,goods_checked,goods_type,buyer_id,buyer_name,buyer_address,buyer_phone,goods_total_price,buyer_remake) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
  get_history_order: 'select * from order_copy where buyer_id=?',
  get_order_detail: 'select * from order_copy where create_time=?',

  search_item: 'select * from seller_upload_goods where goods_name like ?',
  // search_item: 'select * from seller_upload_goods where goods_name like \'%?%\'',
  // search_item: 'select * from seller_upload_goods where goods_name like \'%\'?\'%\'',
  add_search: 'insert into buyer_search (search_id,search_content,buyer_id) values (?,?,?)',
  search_history: 'select * from buyer_search where buyer_id = ?',
  // delete_history: 'delete from buyer_search where buyer_id=?',
  delete_history: 'update buyer_search set search_delete = 0 where buyer_id=?',

  admin_login1: 'select * from admin_reg where admin_id=?',
  admin_login2: 'select * from admin_reg where admin_id=? and admin_pwd=?',
  admin_buyer_manage: 'select * from buyer_reg',
  admin_seller_manage: 'select * from seller_reg',
  admin_order_manage: 'select * from order_copy',

  addCity: 'insert into hot_city (id,spell,name) values (?,?,?)'
}

module.exports = user
