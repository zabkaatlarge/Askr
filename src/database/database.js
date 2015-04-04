var database ={
  "user" : [ { user_id: 'usid1428135258774',
    email: 'vishal_patel@csu.fullerton.edu',
    password: 'password',
    fname: 'vishal',
    lname: 'patel',
    questions: [] },
  { user_id: 'usid1428135349034',
    email: 'bmwatson@csu.fullerton.edu',
    password: 'password',
    fname: 'brian',
    lname: 'watson',
    questions: [] },
  { user_id: 'usid1428135384605',
    email: 'chaitra_anand@csu.fullerton.edu',
    password: 'password',
    fname: 'chaitra',
    lname: 'anand',
    questions: [] } ],
 "question":[ { question_id: 'qid1428135619644',
    statement: 'Where we should go tomorrow for lunch?',
    submitter: 'usid1428135258774',
    date: '04/04/2015',
    votes: 0,
    views: 8,
    comments: [] },
  { question_id: 'qid1428135843438',
    statement: 'How can i complete my project before time',
    submitter: 'usid1428135384605',
    date: '04/04/2015',
    votes: 0,
    views: 6,
    comments: [] } ],

 "comment":[ ],
     "opinion":[]
    /*
    "question":[
        {
            "question_id": 1111,
            "statement": "Where we shoud go this sunday?",
            "votes": 0 ,
            "views": 0,
            "submitter": 1234,
            "date": "03/20/2015",
            "comments": [
                3321
            ]
        },
         {
            "question_id": 2222,
             "statement": "How can i complete my project before time?",
            "votes": 0 ,
            "views": 0,
            "submitter": 5678,
            "date": "03/21/2015",
            "comments": [
                3322
            ]
        }
    ],
    "comment":[
        {
            "comment_id": 3321,
	       "qid": 1111,
            "comment": "I think we should go to IN N OUT", 
            "auther": 5678,
	    "votes" : "1",
            "opinions": [
                1001
               
            ]
        },
         {
            "comment_id": 3322,
	       "qid": 2222,
            "comment": "Strt working on it in advance", 
            "auther": 1234,
	    "votes" : "1",
            "opinions": [
                1002
               
            ]
        }
    ],
    "opinion":[
        {
            "opinion_id":1001,
            "status": "like",
            "user": 1234
        },
         {
            "opinion_id":3322,
            "status": "like",
            "user": 5678
        }
    ]*/
};

module.exports.database=database;

