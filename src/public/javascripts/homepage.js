
//function to show questions on the homepage
$(document).ready (function () {
	"use strict";
	//sample data
	//var url = "http://localhost:3000/question/que_id1";
	var url = "http://localhost:3000/listall"
	$.getJSON(url, function(data) {
		for (var i=0; i < data.length;i++) {
			$(".col-md-11").append("<h2>"+data[i].statement+"</h2>");	
		}
		
		});

	$(".col-md-11").append("<h2>Question: <a href='viewquestion.html'>What movie should we go to?</a></h2><h3>Submitted by: brian on 03/04/2015</h3><p>3 current possible answers, 8 total votes</p><p><a class='btn btn-default' href='viewquestion.html' role='button'>View answers &raquo;</a></p>");
	//$(".col-md-11").append(data.statement);	
});



