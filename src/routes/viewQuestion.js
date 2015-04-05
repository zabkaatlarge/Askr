var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var qid = req.query.qid;
    
    res.render('viewquestion.ejs',{
        session : req.session,
        qid : qid
       
    });
 // res.render('index', { title: 'Express' });
});

module.exports = router;
