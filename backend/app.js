var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose=require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const router=require('./routes/person-routes');
app.use('/person', router);

mongoose.connect('mongodb+srv://admin:RxQjfN5LczLBfeDG@cluster0.vavaeql.mongodb.net/Fyp_Project_Final?retryWrites=true&w=majority').then(()=>{
    console.log('connected to database');
}
).catch(()=>{
    console.log('error connecting to database');
});

//middleware
//RxQjfN5LczLBfeDG



app.listen(5000,()=>{
    console.log('server started at port 5000');
})
//8PRYWaL8T1x1oHr3
module.exports = app;
