var thisId = getParameterByName('qid');
var error = getParameterByName('error');


//function to show questions on the homepage
$(document).ready(function() {
    "use strict";

    var url = "http://localhost:3000/listall";
    var url2 = "http://localhost:3000/listallcomments";

    if (thisId != null) {
        $.getJSON("http://localhost:3000/addView?qid=" + thisId, function(data) {

        });
    }
   
    $.getJSON(url, function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].question_id === thisId) {
                $(".question").append("<div class='page-header'><h1>" + data[i].statement + "</h1><p><small>By: " + data[i].submitter + "</small></p><p><small>Posted on: " + data[i].date + "</p></div>");
                $.getJSON(url2, function(data2) {
                    var counter = 1;
                    for (var q = 0; q < data2.length; q++) {
                        if (data2[q].qid === thisId) {
                            $(".col-md-11").append("<h2>[" + data2[q].votes + " Votes] Answer " + counter + ": " + data2[q].comment + "</h2><h3>Submitted by: " + data2[q].auther + "</h3><p><a class='btn btn-default' href='vote?comment_id=" + data2[q].comment_id + "&comment=" + data2[q].comment + "&qid=" + data2[q].qid + "&auther=" + data2[q].auther + "&votes=" + data2[q].votes + "&opinion=like" + "' role='button'>Like &raquo;</a><a class='btn btn-default' href='vote?comment_id=" + data2[q].comment_id + "&comment=" + data2[q].comment + "&qid=" + data2[q].qid + "&auther=" + data2[q].auther + "&votes=" + data2[q].votes + "&opinion=dislike" + "' role='button'>Dis Like &raquo;</a></p>");
                            counter++;
                        }

                    }
                });
            }

        }

    });

});
 if (error != "") {
        window.alert(error);
    }
//code referenced from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}