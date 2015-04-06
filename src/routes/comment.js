var express = require('express');
var router = express.Router();
var commentModel = require('../model/commentModel');
var questionModel = require('../model/questionModel');
/* GET home page. */
router.get('/', function(req, res, next) {
    var comment_id = 0;
    var comment = req.query.comment;
    var qid = req.query.qid;
    var auther = req.session.user_id;
    var votes = 0;
    var opinions = [];

   comment = commentModel.saveOrUpdateComment(comment_id, qid, comment, auther, votes, opinions);
    var question=questionModel.getQuestionById(qid)[0];
    question.comments.push(comment.comment_id);
    question.votes = parseInt(question.votes)+1;
    var url = "/viewquestion?qid=" + qid;
    res.redirect(url);

});

module.exports = router;