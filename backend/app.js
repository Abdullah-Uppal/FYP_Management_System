var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose=require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// for environment variables
require('dotenv').config()



var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
const router=require('./routes/person-routes');
const supervisorRouter=require('./routes/supervisor-routes');
const formatRouter=require('./routes/formatupload-routes');
const projectRouter=require('./routes/projectroutes');
const milestoneRouter = require('./routes/milestoneroutes');
const groupRouter = require('./routes/grouproutes');
const committeeRouter = require('./routes/committeeroutes');
const departmentRouter = require('./routes/departmentroutes');
const evaluationRouter = require('./routes/evaluation-routes'); 


const meetingRouter = require('./routes/meeting-routes'); 
app.use('/person', router);
app.use('/supervisor', supervisorRouter);
app.use('/format', formatRouter);
app.use('/assets', express.static('assets'))
app.use('/project', projectRouter);
app.use('/milestone', milestoneRouter);
app.use('/group', groupRouter);
app.use('/committee', committeeRouter);
app.use('/department', departmentRouter);
app.use('/misc', require('./routes/miscroutes'));
app.use('/evaluation', evaluationRouter);
app.use('/meeting', meetingRouter);

var DATABASE = 'mongodb+srv://admin:RxQjfN5LczLBfeDG@cluster0.vavaeql.mongodb.net/Fyp_Project_Final?retryWrites=true&w=majority';

if (process.env.DATABASE !== undefined) {
    DATABASE = process.env.DATABASE;
}

mongoose.connect(DATABASE).then(()=>{

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
