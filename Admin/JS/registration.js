// ---------- Validate Registration ----------

function validateRegistration() {
    clearAllErrors();

    let FullName = document.getElementById("FullName").value.trim();
    let AdminID = document.getElementById("AdminID").value.trim();
    let Email = document.getElementById("Email").value.trim();
    let Phone = document.getElementById("Phone").value.trim();
    let Gender = document.querySelector('input[name="Gender"]:checked');
    let AdminRole = document.getElementById("AdminRole").value;
    let Permissions = document.querySelectorAll('input[name="Permission"]:checked');
    let Username = document.getElementById("Username").value.trim();
    let Password = document.getElementById("Password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    let valid = true;

    if (FullName === "") {
        document.getElementById("FullNameError").innerHTML = "Please enter your full name";
        valid = false;
    }

    if (AdminID === "") {
        document.getElementById("AdminIDError").innerHTML = "Please enter your Admin ID";
        valid = false;
    }
    else if (!/^ADM-[0-9]{4}$/i.test(AdminID)) {
        document.getElementById("AdminIDError").innerHTML = "Admin ID must look like ADM-1234";
        valid = false;
    }

    if (Email === "") {
        document.getElementById("EmailError").innerHTML = "Please enter your email";
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
        document.getElementById("EmailError").innerHTML = "Please enter a valid email";
        valid = false;
    }

    if (Phone === "") {
        document.getElementById("PhoneError").innerHTML = "Please enter your phone number";
        valid = false;
    }
    else if (!/^01[3-9][0-9]{8}$/.test(Phone)) {
        document.getElementById("PhoneError").innerHTML = "Phone must be 11 digits starting with 013 - 019";
        valid = false;
    }

    if (Gender === null) {
        document.getElementById("GenderError").innerHTML = "Please select your gender";
        valid = false;
    }

    if (AdminRole === "") {
        document.getElementById("AdminRoleError").innerHTML = "Please select an Admin Role";
        valid = false;
    }

    if (Permissions.length === 0) {
        document.getElementById("PermissionError").innerHTML = "Please select at least one permission";
        valid = false;
    }

    if (Username === "") {
        document.getElementById("UsernameError").innerHTML = "Please enter your username";
        valid = false;
    }

    if (Password === "") {
        document.getElementById("PasswordError").innerHTML = "Please enter your password";
        valid = false;
    }
    else if (Password.length < 8) {
        document.getElementById("PasswordError").innerHTML = "Password must be at least 8 characters";
        valid = false;
    }

    if (ConfirmPassword === "") {
        document.getElementById("ConfirmPasswordError").innerHTML = "Please confirm your password";
        valid = false;
    }
    else if (Password !== ConfirmPassword) {
        document.getElementById("ConfirmPasswordError").innerHTML = "Passwords do not match";
        valid = false;
    }

    let result = document.getElementById("ResultText");

    if (valid) {
        result.className = "success";
        result.innerHTML = "Registration form is valid!";
    }
    else {
        result.className = "failed";
        result.innerHTML = "Please fix the errors marked in red.";
    }

    return false;   // validation-only: no server yet
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
