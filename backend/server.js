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
/*
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
*/
app.listen(PORT,function () {
    console.log('Server is running on port : ',PORT);
});
