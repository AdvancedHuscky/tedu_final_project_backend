//morgan compression
let express = require('express');
let app = express();
app.listen(3000);

let morgan = require('morgan');
let fs = require('fs');
let compression = require('compression');
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
//将日志信息按照日期来归档
let morganStyle = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
let nowDate = new Date();
let fileName = nowDate.getFullYear()+"-"+(nowDate.getMonth()+1)+'-'+nowDate.getDate()+".log";
let logStream = fs.createWriteStream(__dirname+'/logs/'+fileName,{flags:'a'});
//按照tiny这种预定义的格式化日志信息，直接写入logStream对应的文件
app.use(compression())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms',{stream:logStream}));
app.get("/test05",(req,res)=>{
  res.sendFile(__dirname+"/static/test05.html");
  res.flush()
});
app.get("/",(req,res)=>{
  res.send('it is a test');
})

