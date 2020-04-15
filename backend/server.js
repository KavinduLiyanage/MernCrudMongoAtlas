const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
//const port = process.env.PORT || 5000;
const PORT = 4000;
const config = require('./DB.js');
app.use(cors());
app.use(express.json());

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=> {console.log('Database is connected')},
    err => {console.log('cannot connect to the database' + err)}
);

const discountsRouter = require('./routes/discounts');
const productsRouter = require('./routes/products');

app.use('/discounts', discountsRouter);
app.use('/products', productsRouter);

app.listen(PORT,function () {
    console.log('Server is running on port : ',PORT);
});
