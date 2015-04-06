var clicked;

function validateCommentForm() {

    if (clicked === 'submit') {

        var comment = document.commentForm.comment;


        if (textareaValidator(comment)) {

            return true;

        }

        return false;
    }
}

//check if textarea is not empty

function textareaValidator(textArea) {
    var textLength = textArea.value.length;
    if (textLength < 10) {
        alert("Comment is to short. It should be atleast 10 character");
        textArea.focus();
        return false;
    }
    return true;
}