let mysql = require('mysql');
let pool = mysql.createPool({
  user:'root',
  password:'',
  database:'xz',
  connectionLimit:5
});
console.log('数据库连接池创建完毕');
module.exports = pool;