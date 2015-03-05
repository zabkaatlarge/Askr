var express = require("express"),
    http    = require("http"),
    app;

app.use(express.static(_dirname+"/client"));

app = express ();
http.createServer(app).listen(3000);

app.get("/hello",function(req,res){
    res.send("hello world");
});

app.get("/goodbye",function(req,res){
    res.send("good bye");
});