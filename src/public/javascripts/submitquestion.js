showSubmitForm();




//function to show questions on the homepage
function showSubmitForm() {
	"use strict";

	var url = "http://localhost:3000/checksession";
	$.getJSON(url, function(data) {
		if (data[0].status === "in") {
			$(".col-md-11").append("<form class='navbar-form' action='/submit' method='get'><div class='form-group'><input type='text' placeholder='Enter your question' class='form-control' name='statement'></div><button type='submit' class='btn btn-success'>Submit</button></form>");
		} else {
			$(".col-md-11").append("<h3>Please login above if you want to add a question</h3>");
		}
	});
	//	$(".col-md-11").append("<form class='navbar-form' action='/submit' method='get'><div class='form-group'><input type='text' placeholder='Enter your question' class='form-control' name='statement'></div><button type='submit' class='btn btn-success'>Submit</button></form>");
};
