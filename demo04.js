//body-parser cookie-parser
let express = require('express');
let app = express();
app.listen(3000);

let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
//使用body-parser中间件，将发送过来的数据做一个表单格式的反序列化，存储在req.body
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cookieParser());

//使用static中间件来指定静态资源的目录
app.use(express.static(__dirname+"/static"));

app.post('/login',(req,res)=>{
  console.log(req.body);
  console.log(req.cookies);
  res.send('login success'+req.body.uname)
})