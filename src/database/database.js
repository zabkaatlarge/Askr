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
            "statement": "Where we shoud go this sunday?",
            "votes": 1 ,
            "views": 5,
            "submitter": "vishal",
            "date": "03/20/2015",
            "comments": [
                "comment_id1"
                
            
            ]
        },
         {
            "question_id": "que_id2",
             "statement": "How can i complete my project before time?",
            "votes": 1 ,
            "views": 4,
            "submitter": "brian",
            "date": "03/21/2015",
            "comments": [
                "comment_id1"
                
            
            ]
        }
    ],
    "comment":[
        {
            "comment_id": 12345,
	    "qid": "que_id1",
            "comment": "I think we should go to IN N OUT", 
            "auther": "user_id1",
	    "votes" : "2",
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
   
    
  
    
  
    getAllOpinions : function(){
            var result = database.opinion;
            return result;
    }
};
module.exports.database=database;

