// ---------- Validate Add User ----------

function validateUser() {
    clearAllErrors();

    let FullName = document.getElementById("FullName").value.trim();
    let UserID = document.getElementById("UserID").value.trim();
    let Email = document.getElementById("Email").value.trim();
    let Phone = document.getElementById("Phone").value.trim();
    let UserType = document.getElementById("UserType").value;
    let Username = document.getElementById("Username").value.trim();
    let Password = document.getElementById("Password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    let valid = true;

    if (FullName === "") {
        document.getElementById("FullNameError").innerHTML = "Please enter the full name";
        valid = false;
    }

    if (UserID === "") {
        document.getElementById("UserIDError").innerHTML = "Please enter the User ID";
        valid = false;
    }
    else if (!/^USR-[0-9]{4}$/i.test(UserID)) {
        document.getElementById("UserIDError").innerHTML = "User ID must look like USR-1234";
        valid = false;
    }

    if (Email === "") {
        document.getElementById("EmailError").innerHTML = "Please enter the email";
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
        document.getElementById("EmailError").innerHTML = "Please enter a valid email";
        valid = false;
    }

    if (Phone === "") {
        document.getElementById("PhoneError").innerHTML = "Please enter the phone number";
        valid = false;
    }
    else if (!/^01[3-9][0-9]{8}$/.test(Phone)) {
        document.getElementById("PhoneError").innerHTML = "Phone must be 11 digits starting with 013 - 019";
        valid = false;
    }

    if (UserType === "") {
        document.getElementById("UserTypeError").innerHTML = "Please select the user type";
        valid = false;
    }

    if (Username === "") {
        document.getElementById("UsernameError").innerHTML = "Please enter the username";
        valid = false;
    }

    if (Password === "") {
        document.getElementById("PasswordError").innerHTML = "Please enter the password";
        valid = false;
    }
    else if (Password.length < 8) {
        document.getElementById("PasswordError").innerHTML = "Password must be at least 8 characters";
        valid = false;
    }

    if (ConfirmPassword === "") {
        document.getElementById("ConfirmPasswordError").innerHTML = "Please confirm the password";
        valid = false;
    }
    else if (Password !== ConfirmPassword) {
        document.getElementById("ConfirmPasswordError").innerHTML = "Passwords do not match";
        valid = false;
    }

    let result = document.getElementById("ResultText");

    if (valid) {
        result.className = "success";
        result.innerHTML = "User form is valid!";
    }
    else {
        result.className = "failed";
        result.innerHTML = "Please fix the errors marked in red.";
    }

    return false;   // validation-only
}

// ---------- Clear All Errors ----------

function clearAllErrors() {
    let errors = document.querySelectorAll(".error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    let result = document.getElementById("ResultText");
    result.className = "";
    result.innerHTML = "";
}
