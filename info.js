function validateForm() {

    //First name
    var firstname = document.getElementById("fname").value;
    if (firstname == "") {
        document.getElementById("span-FirstName").innerHTML = "Cannot be blank";
        return false;
    }   
    else {
        document.getElementById("span-FirstName").innerHTML = "";
    }

    if (firstname.charAt(0) != firstname.charAt(0).toUpperCase()) {
        document.getElementById("span-FirstName").innerHTML = "First letter must be Uppercase";
        return false;
    }   
    else {
        document.getElementById("span-FirstName").innerHTML = "";
    }

    if (!/^[a-zA-Z]*$/g.test(document.signup.fname.value)) {
        document.getElementById("span-FirstName").innerHTML = "Only alphabet allowed";
        return false;
    }

    //Last Name
    var lastname = document.getElementById("lname").value;
    if (lastname == "") {
        document.getElementById("span-LastName").innerHTML = "Cannot be blank";
        return false;
    }   
    else {
        document.getElementById("span-LastName").innerHTML = "";
    }

    if (lastname.charAt(0) != lastname.charAt(0).toUpperCase()) {
        document.getElementById("span-LastName").innerHTML = "First letter must be Uppercase";
        return false;
    }   
    else {
        document.getElementById("span-LastName").innerHTML = "";
    }

    if (!/^[a-zA-Z]*$/g.test(document.signup.lname.value)) {
        document.getElementById("span-LastName").innerHTML = "Only alphabet allowed";
        return false;
    }

    //Username
    var username = document.getElementById("user").value;
    if (username == "") {
        document.getElementById("span-Username").innerHTML = "Cannot be blank";
        return false;
    }   
    else {
        document.getElementById("span-Username").innerHTML = "";
    }

    if (username.length < 6) {
        document.getElementById("span-Username").innerHTML = "Must have at least 6 characters";
        return false;
    }   
    else {
        document.getElementById("span-Username").innerHTML = "";
    }

    if (!/^[A-Za-z][A-Za-z0-9]+$/.test(document.signup.user.value)) {
        document.getElementById("span-Username").innerHTML = "Must start with an alphabet";
        return false;
    }

    //Password
    var password = document.getElementById("pass").value;
    if (password == "") {
        document.getElementById("span-Password").innerHTML = "Cannot be blank";
        return false;
    }   
    else {
        document.getElementById("span-Password").innerHTML = "";
    }

    if (password.length < 6) {
        document.getElementById("span-Password").innerHTML = "Must have at least 6 characters";
        return false;
    }   
    else {
        document.getElementById("span-Password").innerHTML = "";
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/.test(document.signup.pass.value)) {
        document.getElementById("span-Password").innerHTML = "Must have at least 1 digit and 1 uppercase letter";
        return false;
    }
          
    //Confirm Password
    var confirmpassword = document.getElementById("confp").value;
    if (password != confirmpassword) {
        document.getElementById("span-ConfirmPassword").innerHTML = "Password did not match";
        return false;
    } 
    else {
        document.getElementById("span-ConfirmPassword").innerHTML = "";
    }

    if (confirmpassword == "") {
        document.getElementById("span-ConfirmPassword").innerHTML = "Enter password again";
        return false;
    } 
    else {
        document.getElementById("span-ConfirmPassword").innerHTML = "";
    }

    //Education Status
    var educationalstatus = document.querySelector(`input[type="radio"][name=educationalStatus]:checked`).value;
    if (educationalstatus == "") {
        document.getElementById("span-EducationalStatus").innerHTML = "Choose one option";
        return false;
    }   
    else {
        document.getElementById("span-EducationalStatus").innerHTML = "";
    }

    //Age
    var age = document.getElementById("age").value;
    if ((age < 18) || (age > 60)) {
        document.getElementById("span-age").innerHTML = "Must be in between 18 - 60";
        return false;
    }   
    else {
        document.getElementById("span-age").innerHTML = "";
    }
    
    if (age == "") {
        document.getElementById("span-age").innerHTML = "Cannot be blank";
        return false;
    }   
    else {
        document.getElementById("span-age").innerHTML = "";
    }     
}