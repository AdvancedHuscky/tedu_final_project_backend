let express = require('express');

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