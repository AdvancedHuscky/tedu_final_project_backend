//所有和商品相关的需求
let express =require('express');
let router = express.Router();
let pool = require('../pool');

router.get('/list',(req,res)=>{
  pool.query('SELECT * FROM xz_index_product',(err,result)=>{
    console.log(result);
  })
  res.send('this is product list')
})
router.get('/detail',(req,res)=>{
  res.send('this is detail page')
})
module.exports = router;