var clicked;

function validateQuestionForm() {

    if (clicked === 'submit') {

        var question = document.questionForm.statement;
        if (textareaValidator(question)) {
            return true;
        }
        return false;
    }
}

//check if textarea is not empty

function textareaValidator(textArea) {
    var textLength = textArea.value.length;
    if (textLength < 10) {
        alert("Question is to short. It should be atleast 10 character");
        textArea.focus();
        return false;
    }
    return true;
}