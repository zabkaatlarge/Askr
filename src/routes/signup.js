var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
/* GET home page. */
router.get('/', function(req, res, next) {
    var user_id = 0;
    var email = req.query.email;
    var password = req.query.password;
    var fname = req.query.fname;
    var lname = req.query.lname;
    var questions = [];

    userModel.saveOrUpdateUser(user_id,email,password,fname,lname,questions);
    req.session.username = email;
    res.redirect("/");

});

module.exports = router;
