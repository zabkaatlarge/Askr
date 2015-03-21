var express = require('express');
var router = express.Router();
var userModel = require('../model/questionModel');
/* GET home page. */
router.get('/', function(req, res, next) {
   var question_id = req.query.question_id;
    var statement = req.query.statement;
    var votes = 0;
    var views = 0;
    var comments = "";

    saveOrUpdateQuestion(question_id,statement,votes,views,comments);

    res.redirect("/");

});

module.exports = router;
