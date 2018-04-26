let express = require('express');
let router = express.Router();

router.get('/register',(req,res)=>{
  res.send('this is register')
})
router.get('/login',(req,res)=>{
  res.send('this is login')
})

module.exports = router;
