var express = require('express');
var router = express.Router();
var commentModel = require('../model/commentModel');
/* GET home page. */
router.get('/', function(req, res, next) {
   var comment_id = 0;
    var comment = req.query.comment;
	var qid = req.query.qid;
	var auther = req.session.username;
	var votes = 0;
    var opinions = "";

    commentModel.saveOrUpdateComment(comment_id,qid,comment,auther,votes, opinions);

	//console.log("Comment added: "+comment_id+", "+comment+", "+qid+", "+auther+", "+opinions);

    res.redirect("/viewquestion.html?qid="+qid);

});

module.exports = router;
