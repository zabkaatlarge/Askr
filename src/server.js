var express = require("express"),
    http = require("http"),
    session = require("express-session"),
    login = require("./server/login"),
    app;

// Create our Express-powered HTTP server
// and have it listen on port 3000
app = express();

http.createServer(app).listen(3000);

// set up a static file directory to use for default routing
app.use(express.static(__dirname+"/client"));

// set up express session to create session when user successfully login
app.use(session({secret: '123456'}));

// set up our routes
// for user login
app.get("/login", function (req, res) {

    var result = login.validate(req,res);
    if(result){
        // response if user is authenticated
        req.session.username="admin";
        res.send("successfully logged in");
    }
    else{
        // response if user is not authenticated 
        res.append("error","Authentication Failed");
        res.sendFile(__dirname+"/client/index.html");
    }
    
});

app.get("/goodbye", function (req, res) {
res.send("Goodbye World!");
});