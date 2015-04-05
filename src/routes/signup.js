var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
/* GET home page. */
router.get('/',function(req,res,next){
    
     res.render('signUp.ejs',{
        session : req.session,
       
    });
});
router.get('/new', function(req, res, next) {
    var user_id = 0;
    var email = req.query.email;
    var password = req.query.password;
    var fname = req.query.fName;
    var lname = req.query.lName;
    var questions = [];

  var user=  userModel.saveOrUpdateUser(user_id,email,password,fname,lname,questions);
   
    req.session.username = user.fname;
    req.session.user_id = user.user_id;
    res.redirect("/");

});

module.exports = router;
