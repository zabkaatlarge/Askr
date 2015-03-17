var express = require("express"),
    http = require("http"),
    path = require('path'),
    session = require("express-session"),
    login = require("./server/login"),
    app;

// Create our Express-powered HTTP server
// and have it listen on port 3000
app = express();

http.createServer(app).listen(3000);

// set up a static file directory to use for default routing
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set up express session to create session when user successfully login
app.use(session({secret: '123456'}));


app.get("/sessionCheck",function(req,res){
    
    res.render('index.ejs',{
       layout: false,
        title: 'testSession',
        session : req.session
    });
});
// set up our routes
// for user login
app.get("/login", function (req, res) {

    login.validate(req,res);
    res.end();
    
});

app.get("/logout",function (req,res){
    req.session.destroy();
    res.render('index.ejs',{
        title: 'Successfully Logout'
    });
});
app.get("/goodbye", function (req, res) {
res.send("Goodbye World!");
});