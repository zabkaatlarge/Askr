var database ={
    "user": [
        {
            "user_id": "user_id1",
            "email": "admin",
            "password": "admin",
            "fname": "vishal",
            "lname": "patel",
            "questions": [
                "que_id1",
                "que_id2"
                
            ]
        },
          {
            "user_id": "user_id2",
            "email": "abc@gmail.com",
            "password": "abc",
            "fname": "vishal",
            "lname": "patel",
            "questions": [
                "que_id1"
                
            ]
        }
    ],
    "question":[
        {
            "question_id": "que_id1",
            "votes": 1 ,
            "views": 5,
            "comments": [
                "comment_id1"
                
            
            ]
        },
         {
            "question_id": "que_id2",
            "votes": 1 ,
            "views": 4,
            "comments": [
                "comment_id1"
                
            
            ]
        }
    ],
    "comment":[
        {
            "comment_id": "comment_id1",
            "comment": "Where we should go this sunday?",
            "auther": "user_id1",
            "opinions": [
                "opinion_id1"
               
            ]
        }
    ],
    "opinion":[
        {
            "opinion_id":"opinion_id1",
            "status": "like",
            "user": "user_id1"
        }
    ]
};
module.exports={
   
    getAllUser : function (){
            
            var result=database.user;
       
            return result;
    },
    getAllQuestions : function(){
            var result = database.question;
            return result;
    },
    
    getAllComments : function(){
            var result = database.comment;
            return result;
},
    getAllOpinions : function(){
            var result = database.opinion;
            return result;
    }
};
module.exports.database=database;

