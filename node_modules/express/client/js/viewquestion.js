loginStatus();
showAnswers();
showQuestion();

function showQuestion() {
	"use strict";
	//sample data
	$(".question").append("<h1>Question from brian:</h1><p>What movie should we go to?</p><p>Posted on 03/04/2015");
		
};


//function to show questions on the homepage
function showAnswers() {
	"use strict";
	//sample data
	$(".col-md-11").append("<h2>[3 Votes] Answer 1: Interstellar</h2><h3>Submitted by: vishal on 03/05/2015</h3><p><a class='btn btn-default' href='vote' role='button'>Vote for this answer &raquo;</a></p>");
	$(".col-md-11").append("<h2>[1 Votes] Answer 1: Avengers</h2><h3>Submitted by: vishal on 03/05/2015</h3><p><a class='btn btn-default' href='vote' role='button'>Vote for this answer &raquo;</a></p>");
	$(".col-md-11").append("<h2>[0 Votes] Answer 1: Hot Tub Time Machine 2</h2><h3>Submitted by: brian on 03/04/2015</h3><p><a class='btn btn-default' href='vote' role='button'>Vote for this answer &raquo;</a></p>");
		
};


//function to show username if logged in, and the login field if not logged in
function loginStatus() {
	"use strict";
	//changes header depending on login status
	var loggedIn = true;
	
	if (loggedIn == true) {
		$(".login_header").append("<form class='navbar-form navbar-right'><div class='form-group'><input type='text' placeholder='Welcome brian!' class='form-control'></div></form>");
	} else {
		$(".login_header").append("<form class='navbar-form navbar-right'><div class='form-group'><input type='text' placeholder='username' class='form-control'></div><div class='form-group'><input type='password' placeholder='password' class='form-control'></div><button type='submit' class='btn btn-success'>Sign in</button></form>");
	};		
};
