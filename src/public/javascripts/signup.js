showSignupForm();




//function to show questions on the homepage
function showSignupForm() {
	"use strict";
	//sample data
	$(".col-md-11").append("<h2>Sign Up</h2><h3>It's free and easy, just fill out the form below</h3><form class='navbar-form' action='/signup' method='get'><div class='form-group'><input type='text' placeholder='First Name' class='form-control' name='fname'><br><input type='text' placeholder='Last Name' class='form-control' name='lname'><br><input type='text' placeholder='Email' class='form-control' name='email'><br><input type='password' placeholder='Password' class='form-control' name='password'><br><br><button type='submit' class='btn btn-success'>Submit</button></div></form>");
		
};
