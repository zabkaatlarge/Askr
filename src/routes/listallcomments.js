var express = require('express');
var router = express.Router();
var commentModel = require('../model/commentModel');

/* GET home page. */
router.get('/', function(req, res, next) {
   
    //console.log(questionModel.getAllQuestions()[0]);

    //declare an array and store the json data
    var list = commentModel.getAllComments();

    for (var i = 0; i < list.length; i++) {
    	console.log(list[i]);
    }

    //respond with the array
    res.json(list);

    //res.redirect("../question/" + this_id);

});

module.exports = router;
