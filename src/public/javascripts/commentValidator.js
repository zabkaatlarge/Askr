/*
This function is to validate the form located in the login.html.
It's basically to check the input the user typed in the form.
When user type the wrong input, it pops out an alert message
containing, what is wrong with the input.
*/
var clicked;

function validateCommentForm(){

	if(clicked === 'submit'){

		var comment = document.commentForm.comment;
	

		if(textareaValidator(comment)){
           
			return true;
            
		}
     
		return false;
	}	
}

//check if textarea is not empty

function textareaValidator(textArea){
    var textLength = textArea.value.length;
    if(textLength == 0 || textLength < 10){
        alert("Comment is to short. It should be atleast 10 character");
        textArea.focus();
        return false;
    }
    return true;
}
