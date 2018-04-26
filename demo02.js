let express = require('express');
let app = express();
app.listen(3000);
let routes = require('./routes/products')

app.use('/product',routes);

