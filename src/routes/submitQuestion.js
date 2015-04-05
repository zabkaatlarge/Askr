var express = require('express');
var router = express.Router();
var questionModel = require('../model/questionModel');
/* GET home page. */

router.get('/',function(req,res,next){
     res.render('submitquestion.ejs',{
        session : req.session,
        
       
    });
});
router.get('/new', function(req, res, next) {
   var question_id = 0;
    var statement = req.query.statement;
	var submitter = req.session.user_id;
	var date = "01/01/2015";
    var votes = 0;
    var views = 0;
    var comments = [];

    //date code borrowed from http://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = mm+'/'+dd+'/'+yyyy;
    date = today;

    questionModel.saveOrUpdateQuestion(question_id,statement,submitter,date,votes,views,comments);

    res.redirect("/");

});

module.exports = router;
