showSubmitForm();




//function to show questions on the homepage
function showSubmitForm() {
	"use strict";
	//sample data
	$(".col-md-11").append("<form class='navbar-form' action='/submit' method='get'><div class='form-group'><input type='text' placeholder='Enter your question' class='form-control' name='statement'></div><button type='submit' class='btn btn-success'>Submit</button></form>");
		
};
