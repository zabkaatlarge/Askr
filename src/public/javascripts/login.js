loginStatus();

//function to show username if logged in, and the login field if not logged in
function loginStatus() {
	"use strict";
	//changes header depending on login status
	
	var url = "http://localhost:3000/checksession";
	$.getJSON(url, function(data) {
		if (data[0].status === "in") {
			$(".login_header").append("<form class='navbar-form navbar-right'><div class='form-group'><input type='text' placeholder='Welcome "+data[0].username+"!' class='form-control'></div></form> - <a href='/logout'>Logout</a>");
		} else {
			$(".login_header").append("<form class='navbar-form navbar-right' action='/login' method='get'><div class='form-group'><input type='text' placeholder='username' class='form-control' name='username'></div><div class='form-group'><input type='password' placeholder='password' class='form-control' name='password'></div><button type='submit' class='btn btn-success'>Sign in</button></form>");
		}
		
		
		});
	
	
};
