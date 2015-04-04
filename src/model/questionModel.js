var express = require('express');
var commentModel = require('./commentModel');
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
                               var comment = commentModel.getAllComments().filter(function(item){
                                    return item.comment_id=== question.comments[i];
                                   });
                               comments.push(comment[0]);
                                 }                                                      
                        return comments;        
    },
     
    
     saveOrUpdateQuestion : function(question_id,statement,submitter,date,votes,views,comments){
                         var question= {
                                "question_id": question_id,
                                "statement": statement,
				"submitter": submitter,
				"date": date,
                                "votes": votes,
                                "views": views,
                                "comments": comments  
                        };

                        if(question_id===0 || question_id===""){
                            question_id= "qid"+Date.now();
				
                            question.question_id=question_id;
                            database.database.question.push(question);
                           
                        }else{
                              
                            for(var i=0; i<database.database.question.length ; i++){
                                if(database.database.question[i].question_id===question_id){
                                    database.database.question[i]=question;
                                    break;
                                }
                            }
                        }
                           
                        
                        
    }
    
    
    
};
