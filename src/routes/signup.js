var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('signUp.ejs', {
        session: req.session,

    });
});
router.post('/new', function(req, res, next) {
    var user_id = 0;
    var email = req.body.email;
    var password = req.body.password;
    var fname = req.body.fName;
    var lname = req.body.lName;
    var questions = [];
var user = userModel.getUserByEmail(email);
    if(user!=null){
        var error = "Account already exist";
     res.redirect("/signUp?error="+error);
    }
    else{
    var user = userModel.saveOrUpdateUser(user_id, email, password, fname, lname, questions);

    req.session.username = user.fname;
    req.session.user_id = user.user_id;
    res.redirect("/");
    }

});

module.exports = router;