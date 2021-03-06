var error = getParameterByName('error');

function validateForm() {
    //var uName = document.loginForm.userName;     //no longer used
    var firstNm = document.signUpForm.fName;
    var lastNm = document.signUpForm.lName;
    var eMail = document.signUpForm.email;
    var uName = document.signUpForm.userName;
    var pass = document.signUpForm.password;


    if (fNameValidation(firstNm)) {
        if (lNameValidation(lastNm)) {
            if (emailValidation(eMail)) {
                if (passwordValidation(pass)) {
                    return true;
                }
            }
        }
    }

    return false;
}

//Check if the first name has alphabet only and not blank
function fNameValidation(firstNm) {
    var alphabet = /^[A-Za-z]+$/;

    if (firstNm.value.match(alphabet)) {
        return true;
    } else {
        alert('Please fill out you first name, it can only have alphabet characters only');
        firstNm.focus();
        return false;
    }
}

//Check if the last name has alphabet only and not blank
function lNameValidation(lastNm) {
    var alphabet = /^[A-Za-z]+$/;

    if (lastNm.value.match(alphabet)) {
        return true;
    } else {
        alert('Please fill out you last name, it can only have alphabet characters only');
        lastNm.focus();
        return false;
    }
}

//check if email has the correct format
function emailValidation(eMail) {
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (eMail.value.match(format)) {
        return true;
    } else {
        alert("Please enter your email correctly");
        eMail.focus();
        return false;
    }
}

//check if the length of the password is between 4 and 18
function passwordValidation(pass) {
    var passLength = pass.value.length;
    if (passLength === 0 || passLength >= 18 || passLength < 4) {
        alert("The length of the password should be between 4 and 18");
        pass.focus();
        return false;
    }
    return true;
}

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