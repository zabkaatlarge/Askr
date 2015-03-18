var express = require('express');

//http://stackoverflow.com/questions/11836050/searching-for-items-in-a-json-array-using-node-preferably-without-iteration
module.exports={
  
   getAllQuestions : function (){
            
                    var result=database.database.question;
                    return result;
    },
     getQuestionById : function (id){
            
                            var result=this.getAllQuestions().filter(function(item){
                            return item.question_id===id;
                            });
        
                            return result;
    },
    getCommentsByQuestionId :  function (id){
                               var question = this.getQuestionById(id)[0];
                               var comments=[];
                               for(var i =0; i<question.comments.length ; i++){ 
                               var comment = database.getAllComments().filter(function(item){
                                    return item.comment_id=== question.comments[i];
                                   });
                               comments.push(comment[0]);
                                 }                                                      
                        return comments;        
    }
    
};