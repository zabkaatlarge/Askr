var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');
/* GET home page. */
router.get('/', function(req, res, next) {
   
    if(req.session.username != null) {
      res.json([{"status":"in","username":req.session.username}]);
    } else {
      res.json([{"status":"out"}]);
    }
  });

module.exports = router;
