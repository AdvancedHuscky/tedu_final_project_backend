let express = require('express');
let app = express();
app.listen(3000);

//fore middleware
app.use((req,res,next)=>{
  console.log(req.body);
  req.body = {name:'zhangsan'};
  next();
})

app.get('/',(req,res)=>{
  console.log('in get request'+ req.body);
  res.send('hello middleware')
})