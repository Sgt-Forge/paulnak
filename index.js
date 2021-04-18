const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
mongoose.connect('mongodb://mongo:27017/paulnak', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('err', console.error.bind(console, 'Mongoose connection error:'));

const PORT = 8000;
const HOST = '0.0.0.0';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);
app.use('/user', userRouter);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
