showAnswers();
showQuestion();

function showQuestion() {
	"use strict";
	//sample data
	$(".question").append("<h1>Question from brian:</h1><p>What movie should we go to?</p><p>Posted on 03/04/2015");
		
};


//function to show questions on the homepage
function showAnswers() {
	"use strict";
	//sample data
	$(".col-md-11").append("<h2>[3 Votes] Answer 1: Interstellar</h2><h3>Submitted by: vishal on 03/05/2015</h3><p><a class='btn btn-default' href='vote' role='button'>Vote for this answer &raquo;</a></p>");
	$(".col-md-11").append("<h2>[1 Votes] Answer 1: Avengers</h2><h3>Submitted by: vishal on 03/05/2015</h3><p><a class='btn btn-default' href='vote' role='button'>Vote for this answer &raquo;</a></p>");
	$(".col-md-11").append("<h2>[0 Votes] Answer 1: Hot Tub Time Machine 2</h2><h3>Submitted by: brian on 03/04/2015</h3><p><a class='btn btn-default' href='vote' role='button'>Vote for this answer &raquo;</a></p>");
		
};


