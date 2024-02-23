const express = require('express');
const { dbconnect } = require('./database/dbconnection');
const app = express()
const port = 3000

app.use(express.json());
var morgan = require('morgan');
app.use(morgan('dev'))
require('dotenv').config({path:'./config/.env'});
dbconnect();

app.use(require('./src/componets/brand/brand.api'));
app.use(require('./src/componets/subcategory/subcategory.api'));
app.use(require('./src/componets/category/category.api'));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))