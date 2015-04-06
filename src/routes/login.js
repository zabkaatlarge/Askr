var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
/* GET home page. */
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var button = req.body.button;
    if (button === "signin") {
        var user = userModel.getUserByEmail(email);


        if (user != null && user.password === password) {
            req.session.username = user.fname;
            req.session.user_id = user.user_id;

            res.redirect("/");
        } else {
            var error="Wrong Email or password";
            res.redirect("/?loginerror="+error);
        }
    } else {
        res.redirect("/signUp");
    }
});

module.exports = router;