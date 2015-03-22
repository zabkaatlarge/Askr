loginStatus();

//function to show username if logged in, and the login field if not logged in
function loginStatus() {
	"use strict";
	//changes header depending on login status
	var loggedIn = false;

	var url = "http://localhost:3000/login"
	$.getJSON(url, function(data) {
		if (data.status === "in") {
			loggedIn = true;
		}
		
		});
	
	
	if (loggedIn == true) {
		$(".login_header").append("<form class='navbar-form navbar-right'><div class='form-group'><input type='text' placeholder='Welcome brian!' class='form-control'></div></form>");
	} else {
		$(".login_header").append("<form class='navbar-form navbar-right' action='/login' method='get'><div class='form-group'><input type='text' placeholder='username' class='form-control' name='username'></div><div class='form-group'><input type='password' placeholder='password' class='form-control' name='password'></div><button type='submit' class='btn btn-success'>Sign in</button></form>");
	};		
};
