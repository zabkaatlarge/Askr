/*
This function is to validate the form located in the login.html.
It's basically to check the input the user typed in the form.
When user type the wrong input, it pops out an alert message
containing, what is wrong with the input.
*/
var clicked;

function validateQuestionForm(){

	if(clicked === 'submit'){

		var question = document.questionForm.statement;
		

		if(textareaValidator(question)){
           
			return true;
            
		}
       
		return false;
	}	
}

//check if textarea is not empty

function textareaValidator(textArea){
    var textLength = textArea.value.length;
    if(textLength == 0 || textLength < 10){
        alert("Question is to short. It should be atleast 10 character");
        textArea.focus();
        return false;
    }
    return true;
}
