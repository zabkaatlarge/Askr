var express = require('express');
var router = express.Router();
var commentModel = require('../model/commentModel');
/* GET home page. */
router.get('/', function(req, res, next) {
   var comment_id = parseInt(req.query.comment_id);
    var comment = req.query.comment;
	var qid = req.query.qid;
var auther = req.query.auther;
var intVotes = parseInt(req.query.votes) + 1;
var votes = intVotes;
    var opinions = "";

    commentModel.saveOrUpdateComment(comment_id,qid,comment,auther,votes,opinions);

	console.log("Comment added: "+comment_id+", "+comment+", "+qid+", "+auther+", "+opinions);

    res.redirect("/viewquestion.html?qid="+qid);

});

module.exports = router;
