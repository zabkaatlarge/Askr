var express = require('express');

//http://stackoverflow.com/questions/11836050/searching-for-items-in-a-json-array-using-node-preferably-without-iteration
module.exports={
  
   
    getUserById : function (id){
            
                            var result=database.getAllUser().filter(function(item){
                            return item.user_id===id;
                            });
        
                            return result;
    },
    
    getUserByEmail : function (email){
                            var result = database.getAllUser().filter(function(item){
                                return item.email===email;
                            });
                            result = result[0];
                            return result;
    },
    
    getQuestionsByUser : function (id){
                                var user = this.getUserById(id)[0];
                                var questions=[];
                                for(var i =0; i<user.questions.length ; i++){ 
                                var question = database.getAllQuestions().filter(function(item){
                                     return item.question_id=== user.questions[i];
                                    })
                                questions.push(question[0]);
                                 }                                                      
                        return questions;        
    },
    
    addUser : function(user_id,email,password,fname,lname,questions){
                        
                        
                            var user= {
                            "user_id": user_id,
                            "email": email,
                            "password": password,
                            "fname": fname,
                            "lname": lname,
                            "questions": questions
                        }
                        database.database.user.push(user);
                        console.log(database.database.user);
    }
    
};



