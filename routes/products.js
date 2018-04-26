//所有和商品相关的需求
let express =require('express');
let router = express.Router();

router.get('/list',(req,res)=>{
  res.send('this is product list')
})
router.get('/detail',(req,res)=>{
  res.send('this is detail page')
})
module.exports = router;