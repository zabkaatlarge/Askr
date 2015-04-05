var express = require('express');
var router = express.Router();
var commentModel = require('../model/commentModel');
var userModel = require('../model/userModel');

/* GET home page. */
router.get('/', function(req, res, next) {
   
    //console.log(questionModel.getAllQuestions()[0]);
  // http://stackoverflow.com/questions/29443754/changing-value-of-local-variable-perform-change-in-value-of-original-global-vari/29443782#29443782
   function deepCopy (arr) {
    var out = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        var obj = {};
        for (var k in item) {
            obj[k] = item[k];
        }
        out.push(obj);
    }
    return out;
}

    //declare an array and store the json data
    var list = deepCopy(commentModel.getAllComments());

   
for(i=0;i<list.length; i++){
      
       list[i].auther=userModel.getUserById(list[i].auther)[0].fname;
   }
    //respond with the array
    res.json(list);

    //res.redirect("../question/" + this_id);

});

module.exports = router;
