var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
var questionModel =require('../model/questionModel');

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

router.get('/addUser',function(req,res,next){
    
    userModel.saveOrUpdateUser("user_id1","abcd@sdf.cm","finally","hello","world",["1","2"]);
    userModel.saveOrUpdateUser("","abcd@sdf.cm","finally","hello","world",["1","2"]);
  //  console.log(database.database.user);
    res.end("check console");
    
});

router.get('/getQuestionsByUser',function(req,res,next){
    
    var questions = userModel.getQuestionsByUser("user_id1");
    console.log(questions);
    res.end("check console");
});

router.get('/getQuestion',function(req,res,next){
    
    var comments = questionModel.getCommentsByQuestionId("que_id1");
    console.log(comments);
    res.end("check console");
    
});
module.exports = router;
