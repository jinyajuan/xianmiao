const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1111',
  database: 'xianmiao'
})

// conn.connect()
// let sql = 'SELECT * FROM seller_reg'
// conn.query(sql, function (err, result) {
//   if (err) {
//     console.log('[SELECT ERROR] - ', err.message)
//     return
//   }
//
//   console.log('--------------------------SELECT----------------------------');
//   console.log(result)
//   console.log('------------------------------------------------------------\n\n');
// })

module.exports = conn
