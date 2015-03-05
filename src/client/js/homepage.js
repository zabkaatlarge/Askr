loginStatus();
showQuestions();


//function to show questions on the homepage
function showQuestions() {
	"use strict";
	//sample data
	$(".col-md-11").append("<h2>Question: <a href='#'>What movie should we go to?</a></h2><h3>Submitted by: brian on 03/04/2015</h3><p>3 current possible answers, 8 total votes</p><p><a class='btn btn-default' href='#' role='button'>View answers &raquo;</a></p>");
		
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
