var express = require('express');
var router = express.Router();
var questionModel = require('../model/questionModel');

/* GET home page. */
router.get('/', function(req, res, next) {
   var this_id = req.params.id;

    res.json(questionModel.getQuestionById(this_id));

    res.redirect("../question/" + this_id);

});

module.exports = router;
