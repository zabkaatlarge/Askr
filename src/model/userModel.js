var express = require('express');
var questionModel = require('./questionModel');
//http://stackoverflow.com/questions/11836050/searching-for-items-in-a-json-array-using-node-preferably-without-iteration
module.exports={
  
   getAllUser : function (){
            
            var result=database.database.user;
       
            return result;
    },
    getUserById : function (id){
            
                            var result=this.getAllUser().filter(function(item){
                            return item.user_id===id;
                            });
        
                            return result;
    },
    
    getUserByEmail : function (email){
                            var result = this.getAllUser().filter(function(item){
                                return item.email===email;
                            });
                            result = result[0];
                            return result;
    },
    
    getQuestionsByUser : function (id){
                                var user = this.getUserById(id)[0];
                                var questions=[];
                                for(var i =0; i<user.questions.length ; i++){ 
                                var question = questionModel.getAllQuestions().filter(function(item){
                                     return item.question_id=== user.questions[i].question_id;
                                    });
                                questions.push(question[0]);
                                 }                                                      
                        return questions;        
    },
    
    
    
    saveOrUpdateUser : function(user_id,email,password,fname,lname,questions){
                        var user= {
                            "user_id": user_id,
                            "email": email,
                            "password": password,
                            "fname": fname,
                            "lname": lname,
                            "questions": questions
                        };
                        console.log(user_id);
                        if(user_id===0 || user_id===""){
                            user_id= Date.now();
                            user.user_id=user_id;
                            database.database.user.push(user);
                            console.log("in if");
                        }else{
                              
                            for(var i=0; i<database.database.user.length ; i++){
                                if(database.database.user[i].user_id===user_id){
                                    database.database.user[i]=user;
                                    break;
                                }
                            }
                        }
                           
                        console.log(database.database.user);
                        
    }
};



