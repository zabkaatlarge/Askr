var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
var questionModel = require('../model/questionModel');
var commentModel = require('../model/commentModel');
var opinionModel = require('../model/opinionModel');
/* GET home page. */
router.get('/checkSession', function(req, res, next) {
    res.render('index.ejs', {
        layout: false,
        title: 'testSession',
        session: req.session,
        path: __dirname
    });
});

router.get('/getUser', function(req, res, next) {

    var user = userModel.getUserByEmail("admin");
    console.log(user);
    res.end("check console");

});

router.get('/saveUser', function(req, res, next) {

    userModel.saveOrUpdateUser("user_id1", "abcd@sdf.cm", "finally", "hello", "world", ["1", "2"]);
    userModel.saveOrUpdateUser("", "abcd@sdf.cm", "finally", "hello", "world", ["1", "2"]);
    //  console.log(database.database.user);
    res.end("check console");

});

router.get('/getQuestionsByUser', function(req, res, next) {

    var questions = userModel.getQuestionsByUser("user_id1");
    console.log(questions);
    res.end("check console");
});

router.get('/getQuestion', function(req, res, next) {

    var comments = questionModel.getQuestionById("que_id1");
    console.log(comments);
    res.end("check console");

});

router.get('/saveQuestion', function(req, res, next) {
    questionModel.saveQuestion("", "How to get A?", "10", "15", ["c1", "c2"]);
    res.end("check console");
});

router.get('/getComment', function(req, res, next) {
    var comments = commentModel.getCommentByCommentId('comment_id1');
    console.log(comments);
    res.end("check console");
});
router.get('/saveComment', function(req, res, next) {
    commentModel.saveOrUpdateComment("comment_id1", "I am fine with anything", "user_id1", ["1", "2"]);
    res.end("check console");
});
router.get('/getOpinion', function(req, res, next) {
    var opinions = commentModel.getOpinionsByCommentId('comment_id1');
    console.log(opinions);
    res.end("check console");
});

router.get('/saveOpinion', function(req, res, next) {
    opinionModel.saveOrUpdateOpinion("opinion_id1", "dislike", "user_id1");
    res.end("check console");
});

router.get('/getDatabase', function(req, res, next) {
    console.log(userModel.getAllUser());
    console.log(questionModel.getAllQuestions());
    console.log(commentModel.getAllComments());
    console.log(opinionModel.getAllOpinions());
    res.end("check console");
});

module.exports = router;