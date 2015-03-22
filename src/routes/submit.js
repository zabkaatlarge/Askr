var express = require('express');
var router = express.Router();
var questionModel = require('../model/questionModel');
/* GET home page. */
router.get('/', function(req, res, next) {
   var question_id = 0;
    var statement = req.query.statement;
    var votes = 0;
    var views = 0;
    var comments = "";

    questionModel.saveOrUpdateQuestion(question_id,statement,votes,views,comments);

    res.redirect("/");

});

module.exports = router;
