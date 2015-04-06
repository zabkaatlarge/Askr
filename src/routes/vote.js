var express = require('express');
var router = express.Router();
var commentModel = require('../model/commentModel');
var opinionModel = require('../model/opinionModel');
/* GET home page. */
router.get('/', function(req, res, next) {
    var comment_id = req.query.comment_id;
    var comment = commentModel.getCommentByCommentId(comment_id);
    var qid = req.query.qid;
    var auther = req.session.user_id;



    var error = "";
    var opinion_status = req.query.opinion;

    if (auther === undefined) {
        error = "Need to login for adding vote.";
        res.redirect("/viewquestion?qid=" + qid + "&error=" + error);
    } else {

        var opinions = commentModel.getOpinionsByCommentId(comment_id);
        var existedOpinion = opinions.filter(function(item) {
            return item.user === auther;
        });

        if (existedOpinion[0] === undefined) {

            //User's first opinion on comment.
            var opinion = opinionModel.saveOrUpdateOpinion("", opinion_status, auther);

            comment[0].opinions.push(opinion.opinion_id);
            if (opinion.status === "like") {
                //opinion is like
                var votes = parseInt(comment[0].votes) + 1;

                commentModel.saveOrUpdateComment(comment[0].comment_id, comment[0].qid, comment[0].comment, comment[0].auther, votes, comment[0].opinions);
            } else {
                //opinion is dislike

                var votes = parseInt(comment[0].votes) - 1;
                commentModel.saveOrUpdateComment(comment[0].comment_id, comment[0].qid, comment[0].comment, comment[0].auther, votes, comment[0].opinions);

            }


        } else {

            var votes = parseInt(comment[0].votes);
            // User already likes or disliked the comment

            if (opinion_status === "like") { //new opinion is like

                if (existedOpinion[0].status === "like") {
                    error = "You can only give only 1 opinion for each comment";

                } else {
                    //different opinion this time

                    var index = -1;
                    for (i = 0; i < comment[0].opinions.length; i++) {
                        if (comment[0].opinions[i] === existedOpinion[0].opinion_id)
                            index = i;
                        break;
                    }
                    //  = opinions.indexOf(existedOpinion[0].opinion_id);

                    if (index != -1) {
                        comment[0].opinions.splice(index, 1);
                        votes = votes + 1;
                    }
                }

            } else {
                //new opinion is dislike

                if (existedOpinion[0].status === "dislike") {
                    //Same opinion second time
                    error = "You can only give only 1 opinion for each comment"
                } else {
                    //Opinion changed like to dislike
                    var index = -1;

                    for (i = 0; i < comment[0].opinions.length; i++) {
                        if (comment[0].opinions[i] === existedOpinion[0].opinion_id)
                            index = i;
                        break;
                    }
                    if (index != -1) {
                        comment[0].opinions.splice(index, 1);
                        votes = votes - 1;


                    }
                }
            }
            commentModel.saveOrUpdateComment(comment[0].comment_id, comment[0].qid, comment[0].comment, comment[0].auther, votes, comment[0].opinions);

        }

        res.redirect("/viewquestion?qid=" + qid + "&error=" + error);
    }




});

module.exports = router;

