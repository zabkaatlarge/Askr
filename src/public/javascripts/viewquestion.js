var thisId = getParameterByName('qid');
var error = getParameterByName('error');


//function to show questions on the homepage
$(document).ready (function () {
	"use strict";
	//sample data
	//var url = "http://localhost:3000/question/que_id1";
	var url = "http://localhost:3000/listall";
	var url2 = "http://localhost:3000/listallcomments";
	
    


	
    if(thisId!=null){
         $.getJSON("http://localhost:3000/addView?qid="+thisId,function(data){
         
         });
    }
   
    
    if(error!=""){
        window.alert(error);
    }
	$.getJSON(url, function(data) {
		for (var i=0; i < data.length;i++) {
			if (data[i].question_id === thisId)
			{
				$(".question").append("<div class='page-header'><h1>"+data[i].statement+"</h1><p><small>By: "+data[i].submitter+"</small></p><p><small>Posted on: "+data[i].date+"</p></div>");
                
                
				$.getJSON(url2, function(data2) {
					var counter = 1;
					for (var q=0; q < data2.length;q++) {
						if (data2[q].qid === thisId) {
							$(".col-md-11").append("<h2>["+data2[q].votes+" Votes] Answer "+counter+": "+data2[q].comment+"</h2><h3>Submitted by: "+data2[q].auther+"</h3><p><a class='btn btn-default' href='vote?comment_id="+data2[q].comment_id+"&comment="+data2[q].comment+"&qid="+data2[q].qid+"&auther="+data2[q].auther+"&votes="+data2[q].votes+"&opinion=like"+"' role='button'>Like &raquo;</a><a class='btn btn-default' href='vote?comment_id="+data2[q].comment_id+"&comment="+data2[q].comment+"&qid="+data2[q].qid+"&auther="+data2[q].auther+"&votes="+data2[q].votes+"&opinion=dislike"+"' role='button'>Dis Like &raquo;</a></p>");
							counter++;
						}

					}
				});
				
  				/*setTimeout(function (){
				if (logged === 1) {
					$(".col-md-10").append("<form class='navbar-form' action='/comment' method='get'><div class='form-group'><textarea placeholder='Enter your comment' class='form-control' name='comment' maxlength='50' style='width:485px'  rows='3'></textarea><input type='hidden' name='qid' value='"+thisId+"'></div><div class='form-group'><button type='submit' class='btn btn-success'>Add Comment</button></div></form>");
				} else {
					$(".col-md-10").append("<div class='alert alert-warning' role='alert'>Please login above if you want to comment or vote for answer</div>");
				}
				}, 500); */
				


				
				
			}

			//$(".col-md-11").append("<h2>Question: <a href='question/"+data[i].question_id+"'>"+data[i].statement+"</a></h2><h3>Submitted by: "+data[i].submitter+" on "+data[i].date+"</h3><p>"+data[i].votes+" total votes, "+data[i].views+" total views</p><p><a class='btn btn-default' href='question/"+data[i].question_id+"' role='button'>View answers &raquo;</a></p>");	
		}

		
		});

	//$(".col-md-11").append(data.statement);	
});

//code referenced from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
