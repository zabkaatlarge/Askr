var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');

/* GET home page. */
router.get('/checkSession', function(req, res, next) {
 res.render('index.ejs',{
       layout: false,
        title: 'testSession',
        session : req.session
    });
});

router.get('/getUser',function(req,res,next){
    
    var user = userModel.getUserByEmail("admin");
    console.log(user);
    res.end("check console");
    
});

router.get('/getQuestionsByUser',function(req,res,next){
    
    var questions = userModel.getQuestionsByUser("user_id1");
    console.log(questions);
    res.end("check console");
});

module.exports = router;
