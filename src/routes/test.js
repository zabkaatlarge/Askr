var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/checkSession', function(req, res, next) {
 res.render('index.ejs',{
       layout: false,
        title: 'testSession',
        session : req.session
    });
});

module.exports = router;
