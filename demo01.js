let express = require('express');
let queryString = require('querystring')

let app = express();
app.listen(3000);
app.get('/',(req,res)=>{
  res.send('Hello World!')
})
app.get('/test01',(req,res)=>{
  res.sendFile(__dirname+"/static/test01.html");
})
app.get('/testcss',(req,res)=>{
  res.sendFile(__dirname+"/static/test.css")
})
app.get('/jq',(req,res)=>{
  res.sendFile(__dirname+"/static/jquery-1.11.3.js")
})
app.get('/detail',(req,res)=>{
  res.send(`this is ${req.query.id}的详情页`);
})
app.post('/login',(req,rep)=>{
  //post 不能按照req.query解析所传来的参数
  // 方式1：body-parser
  // 方式2：事件
  req.on('data',(buf)=>{
    console.log(buf.toString());
    
  })

})