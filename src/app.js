var express = require('express');
var http = require("http");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var logout = require('./routes/logout');
var comment = require('./routes/comment');
var checksession = require('./routes/checksession');
var vote = require('./routes/vote');
var listallcomments = require('./routes/listallcomments');
var submit = require('./routes/submit');
var signup = require('./routes/signup');
var listall = require('./routes/listall');
var question = require('./routes/question');
var viewQuestion = require('./routes/viewQuestion');
var test= require ('./routes/test');
var addview = require('./routes/addView');
database = require('./database/database');
var app = express(); 

http.createServer(app).listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// set up express session to create session when user successfully login
app.use(session({secret: '123456'}));
app.use('/', routes);
app.use('/users', users);
app.use('/login',login);
app.use('/logout',logout);
app.use('/submit',submit);
app.use('/signup',signup);
app.use('/checksession',checksession);
app.use('/listall',listall);
app.use('/listallcomments',listallcomments);
app.use('/comment',comment);
app.use('/vote',vote);
app.use('/question',question);
app.use('/test',test);
app.use('/addView',addview);
app.use('/viewquestion',viewQuestion);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
