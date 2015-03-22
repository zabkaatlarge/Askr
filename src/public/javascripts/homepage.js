
//function to show questions on the homepage
$(document).ready (function () {
	"use strict";
	//sample data
	//var url = "http://localhost:3000/question/que_id1";
	var url = "http://localhost:3000/listall"
	$.getJSON(url, function(data) {
		for (var i=0; i < data.length;i++) {
			$(".col-md-11").append("<h2>Question: <a href='viewquestion.html?qid="+data[i].question_id+"'>"+data[i].statement+"</a></h2><h3>Submitted by: "+data[i].submitter+" on "+data[i].date+"</h3><p>"+data[i].votes+" total votes, "+data[i].views+" total views</p><p><a class='btn btn-default' href='viewquestion.html?qid="+data[i].question_id+"' role='button'>View answers &raquo;</a></p>");	
		}
		
		});

	//$(".col-md-11").append(data.statement);	
});



