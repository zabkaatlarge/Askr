var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
/* GET home page. */
router.get('/', function(req, res, next) {
   var username = req.query.username;
    var password = req.query.password;

    var user = userModel.getUserByEmail(username);
    
   // console.log (username);
    //console.log(password);
    if(user != null &&  user.password === password)
    {
       req.session.username=username;
        //res.render('index.ejs',{
       //layout: false,
        //title: 'Successfull Logged in',
        //session : req.session
    //});
	console.log("The session says: "+req.session);
	res.json([{"status":"in"}]);
    }
    else{
        
        console.log(user);
        //console.log("password="+user.password);
        //res.end("Wrong username/ password");
       //  res.append("error","Authentication Failed");
        //res.sendFile(__dirname+"/client/index.html");
	console.log("The session says: "+req.session);
	res.json([{"status":"out"}]);
    }
});

module.exports = router;
