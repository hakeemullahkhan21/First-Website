function submitForm() {
	var date = document.getElementById("Date").value;
	var lastName = document.getElementById("Lname").value;
	var firstName = document.getElementById("Fname").value;
	var phone = document.getElementById("Phone").value;
	var email = document.getElementById("email").value;
	var room = document.getElementById("Room").value;
	var complaint = document.getElementById("compl").value;
	
	if (validation()) // Calling validation function
	{
		var userInfo = ("\r\n Here is your information:" +
						"\r\n Date of complaint: " + date +
						"\r\n Name : " + lastName + " " + firstName +
						"\r\n Phone: " + phone +
						"\r\n Email : " + email + 
						"\r\n Room: " + room +
						"\r\n complaint: " + complaint + 
						"\r\n Form Submitted Successfully, Thank you!");
		
		alert(userInfo);
	}
}

// validation Function.
function validation() {
	
	//fields
	var date = document.getElementById("Date").value;
	var lastName = document.getElementById("Lname").value;
	var firstName = document.getElementById("Fname").value;
	var phone = document.getElementById("Phone").value;
	var email = document.getElementById("email").value;
	var room = document.getElementById("Room").value;
	var complaint = document.getElementById("compl").value;
	
	//Reg for phone, email, character only
	var phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var charactersCheck = /^[a-zA-Z]*$/;
	if (date === '' || lastName === '' || firstName === '' || phone === '' || email === '' || room === '' || complaint === '' ) 
	{
		alert("Please fill all fields...!");
		return false;
	} 
	else if (!(email).match(emailReg)) 
	{
		alert("Invalid Email....!\r\nFormat: zyx@abc.com");
		return false;
	}
	else if (!(phone).match(phoneReg)) 
	{
		alert("Invalid Phone Number...!\r\nFormat: ###-###-####");
		return false;
	} 
	else if (!(lastName).match(charactersCheck)) 
	{
		alert("Characters Only for Last name");
		return false;
	} 
	else if (!(firstName).match(charactersCheck)) 
	{
		alert("Characters Only for First name");
		return false;
	} 
	else 
	{
		return true;
	}
}


