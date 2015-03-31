var express = require('express');
var router = express.Router();
var commentModel = require('../model/commentModel');
/* GET home page. */
router.get('/', function(req, res, next) {
   var comment_id = parseInt(req.query.comment_id);
    var comment = req.query.comment;
	var qid = req.query.qid;
var auther = req.session.username;
var intVotes = parseInt(req.query.votes) + 1;
var votes = intVotes;
    var error = "";
    var opinions = "";
if(auther===undefined){
    error = "Need to login for adding vote.";
    res.redirect("/viewquestion.html?qid="+qid+"&error="+error);
}
    else{
        console.log("auther = "+auther);
         commentModel.saveOrUpdateComment(comment_id,qid,comment,auther,votes,opinions);
          res.redirect("/viewquestion.html?qid="+qid);
    }
	console.log("Comment added: "+comment_id+", "+comment+", "+qid+", "+auther+", "+opinions);

  

});

module.exports = router;
