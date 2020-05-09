const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();

const PORT = 4000;
const config = require('./database/DB.js');
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
