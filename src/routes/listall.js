var express = require('express');
var router = express.Router();
var questionModel = require('../model/questionModel');

/* GET home page. */
router.get('/', function(req, res, next) {
   
    console.log(questionModel.getAllQuestions()[0]);

    //declare and array and store the json data

    //respond with the array
    res.json(questionModel.getAllQuestions()[0]);

    //res.redirect("../question/" + this_id);

});

module.exports = router;
