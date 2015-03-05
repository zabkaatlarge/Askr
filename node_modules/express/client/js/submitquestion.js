loginStatus();
showSubmitForm();




//function to show questions on the homepage
function showSubmitForm() {
	"use strict";
	//sample data
	$(".col-md-11").append("<form class='navbar-form'><div class='form-group'><input type='text' placeholder='Enter your question' class='form-control'></div><button type='submit' class='btn btn-success'>Submit</button></form>");
		
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
