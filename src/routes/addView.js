var express = require('express');
var router = express.Router();
var questionModel = require('../model/questionModel');

/* GET home page. */
router.get('/', function(req, res, next) {


    var qid = req.query.qid;

    var question = questionModel.getQuestionById(qid)[0];

    question.views++;
   
    //respond with the array
    res.json(['done']);



});

module.exports = router;