/*
This function is to validate the form located in the signUp.html.
It's basically to check the input the user typed in the form.
When user type the wrong input, it pops out an alert message
containing, what is wrong with the input.
*/
function validateForm()  
{  
	var firstNm = document.signUpForm.fName;  
	var lastNm = document.signUpForm.lName;
	var eMail = document.signUpForm.email;
	var uName = document.signUpForm.userName;
	var pass = document.signUpForm.password;
	
   
	if(fNameValidation(firstNm)) {  
  		if(lNameValidation(lastNm)) { 
  			if(emailValidation(eMail)) {
				if(usernameValidation(uName)){
					if(passwordValidation(pass)){}
				}
  			} 
		} 
	} 

	return false;  
}

//Check if the first name has alphabet only and not blank
function fNameValidation(firstNm)
{
	var alphabet = /^[A-Za-z]+$/;  

	if(firstNm.value.match(alphabet))  {  
		return true;  
	}  
	else  {  
		alert('Please fill out you first name, it can only have alphabet characters only');  
		firstNm.focus();  
		return false;  
	}  
}

//Check if the last name has alphabet only and not blank
function lNameValidation(lastNm)
{
	var alphabet = /^[A-Za-z]+$/;  

	if(lastNm.value.match(alphabet))  {  
		return true;  
	}  
	else  {  
		alert('Please fill out you last name, it can only have alphabet characters only');  
		lastNm.focus();  
		return false;  
	} 
}

//check if email has the correct format
function emailValidation(eMail)
{
	var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(eMail.value.match(format))  {  
		return true;  
	}  
	else  {  
		alert("Please enter your email correctly");  
		eMail.focus();  
		return false;  
	}  
}

//check if the username has correct format, it can only have alphabet and numbers
//the length is suppose to be between 6 and 16
function usernameValidation(uName){
	var format = /^[A-Za-z1-9]+$/;
	var uNameLength = uName.value.length;
	
	if(uName.value.match(format) && uNameLength >= 6 && uNameLength <=16) {  
		return true;  
	}  
	else {  
		alert('Please enter your username, it can only have alphabet and numbers. And the length should be between 6 and 16');  
		uName.focus();  
		return false;  
	}  
}

//check if the length of the password is between 4 and 18
function passwordValidation(pass){
	var passLength = pass.value.length;  
	if (passLength == 0 ||passLength >= 18 || passLength < 4)  
	{  
		alert("The length of the password should be between 4 and 18");  
		pass.focus();  
		return false;  
	}  
	return true; 
}