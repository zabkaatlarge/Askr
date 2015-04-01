showSubmitForm();




//function to show questions on the homepage
function showSubmitForm() {
	"use strict";

	var url = "http://localhost:3000/checksession";
	$.getJSON(url, function(data) {
		if (data[0].status === "in") {
			$(".col-md-11").append("<form class='navbar-form' action='/submit' method='get'><div class='form-group'><div class='input-group'>  <textarea placeholder='Enter your question' name='statement' class='form-control' maxlength='50' style='width:485px'  rows='3'></textarea></div></div><button type='submit' class='btn btn-success'>Submit</button></form>");
		} else {
			$(".col-md-11").append("<div class='alert alert-warning' role='alert'>Please login above if you want to add a question</div>");
		}
	});
	//	$(".col-md-11").append("<form class='navbar-form' action='/submit' method='get'><div class='form-group'><input type='text' placeholder='Enter your question' class='form-control' name='statement'></div><button type='submit' class='btn btn-success'>Submit</button></form>");
};
