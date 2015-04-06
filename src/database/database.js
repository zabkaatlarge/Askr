var database = {
    "user": [{
        user_id: 'usid1428135258774',
        email: 'vishal_patel@csu.fullerton.edu',
        password: 'password',
        fname: 'vishal',
        lname: 'patel',
        questions: []
    }, {
        user_id: 'usid1428135349034',
        email: 'bmwatson@csu.fullerton.edu',
        password: 'password',
        fname: 'brian',
        lname: 'watson',
        questions: []
    }, {
        user_id: 'usid1428135384605',
        email: 'chaitra_anand@csu.fullerton.edu',
        password: 'password',
        fname: 'chaitra',
        lname: 'anand',
        questions: []
    }],
    "question": [{
        question_id: 'qid1428135619644',
        statement: 'Where we should go tomorrow for lunch?',
        submitter: 'usid1428135258774',
        date: '04/04/2015',
        votes: 1,
        views: 8,
        comments: []
    }, {
        question_id: 'qid1428135843438',
        statement: 'How can i complete my project before time',
        submitter: 'usid1428135384605',
        date: '04/04/2015',
        votes: 0,
        views: 6,
        comments: []
    }],

    "comment": [{
        comment_id: 'comid1428195321892',
        qid: 'qid1428135619644',
        comment: 'Lets go to In and Out',
        auther: 'usid1428135258774',
        votes: 0,
        opinions: []
    }],
    "opinion": []

};

module.exports.database = database;