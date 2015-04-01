loginStatus();

//function to show username if logged in, and the login field if not logged in
function loginStatus() {
	"use strict";
	//changes header depending on login status

	var url = "http://localhost:3000/checksession";
	$.getJSON(url, function(data) {
		if (data[0].status === "in") {
            
			$(".login_header").html("<form class='navbar-form navbar-right'><div class='form-group'><input type='text' placeholder='Welcome "+data[0].username+"!' class='form-control'></div> - <a href='/logout'>Logout</a></form>");
		} else {
			//$(".login_header").append("");
		}
		
		
		});
	
	
};
