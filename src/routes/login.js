var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
/* GET home page. */
router.get('/', function(req, res, next) {
    var email = req.query.email;
    var password = req.query.password;
    var button = req.query.button;
    if (button === "signin") {
        var user = userModel.getUserByEmail(email);


        if (user != null && user.password === password) {
            req.session.username = user.fname;
            req.session.user_id = user.user_id;

            res.redirect("/");
        } else {

            res.redirect("/");
        }
    } else {
        res.redirect("/signUp");
    }
});

module.exports = router;