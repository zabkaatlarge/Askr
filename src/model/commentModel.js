var express = require('express');
var opinionModel = require('./opinionModel');
//http://stackoverflow.com/questions/11836050/searching-for-items-in-a-json-array-using-node-preferably-without-iteration
module.exports = {

    getAllComments: function() {

        var result = database.database.comment;

        return result;
    },
    getCommentByCommentId: function(id) {

        var result = this.getAllComments().filter(function(item) {
            return item.comment_id === id;
        });

        return result;
    },
    getOpinionsByCommentId: function(id) {

        var comment = this.getCommentByCommentId(id)[0];
        var opinions = [];

        for (var i = 0; i < comment.opinions.length; i++) {
            var opinion = opinionModel.getAllOpinions().filter(function(item) {
                return item.opinion_id === comment.opinions[i];
            });
            opinions.push(opinion[0]);
        }

        return opinions;
    },

    saveOrUpdateComment: function(comment_id, qid, comment, auther, votes, opinions) {
        var comment = {
            "comment_id": comment_id,
            "qid": qid,
            "comment": comment,
            "auther": auther,
            "votes": votes,
            "opinions": opinions

        };

        if (comment_id === 0 || comment_id === "") {
            comment_id = "comid" + Date.now();
            comment.comment_id = comment_id;
            comment.opinions = [];
            database.database.comment.push(comment);

        } else {

            for (var i = 0; i < database.database.comment.length; i++) {
                if (database.database.comment[i].comment_id === comment_id) {
                    database.database.comment[i] = comment;
                    break;
                }
            }
        }

        return comment;

    }

};