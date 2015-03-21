/*
This function is to validate the form located in the login.html.
It's basically to check the input the user typed in the form.
When user type the wrong input, it pops out an alert message
containing, what is wrong with the input.
*/
function validateLoginForm(){
	var uName = document.loginForm.userName;
	var pass = document.loginForm.password;

	if(usernameValidation(uName)){
		if(passwordValidation(pass)){}
	}

	return false;
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