let express = require('express');
let app = express();
app.listen(3000);
//使用static中间件指定浏览器可以直接访问静态资源
app.use(express.static(__dirname+'/static'))

let routes = require('./routes/products')

app.use('/products',routes);

