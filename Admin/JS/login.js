// ---------- Captcha ----------

let captchaAnswer = 0;

function makeCaptcha() {
    let first = Math.floor(Math.random() * 9) + 1;
    let second = Math.floor(Math.random() * 9) + 1;

    captchaAnswer = first + second;

    document.getElementById("CaptchaQuestion").innerHTML = "What is " + first + " + " + second + " ?";
    document.getElementById("Captcha").value = "";
}

// ---------- Show / Hide Password ----------

function togglePassword(inputId, checkbox) {
    let input = document.getElementById(inputId);

    if (checkbox.checked) {
        input.type = "text";
    }
    else {
        input.type = "password";
    }
}

// ---------- Validate Login ----------

function validateAdminLogin() {
    clearAllErrors();

    let AdminID = document.getElementById("AdminID").value.trim();
    let Password = document.getElementById("Password").value;
    let Captcha = document.getElementById("Captcha").value.trim();

    let valid = true;

    if (AdminID === "") {
        document.getElementById("AdminIDError").innerHTML = "Please enter your Admin ID";
        valid = false;
    }
    else if (!/^ADM-[0-9]{4}$/i.test(AdminID)) {
        document.getElementById("AdminIDError").innerHTML = "Admin ID must look like ADM-1234";
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

    if (Captcha === "") {
        document.getElementById("CaptchaError").innerHTML = "Please answer the security question";
        valid = false;
    }
    else if (Number(Captcha) !== captchaAnswer) {
        document.getElementById("CaptchaError").innerHTML = "Wrong answer. Please try again";
        makeCaptcha();
        valid = false;
    }

    if (valid) {
        let message = "Login details for " + AdminID.toUpperCase() + " are valid!";

        if (document.getElementById("Remember").checked) {
            message = message + " (Remember Me is ON)";
        }

        document.getElementById("ResultText").className = "success";
        document.getElementById("ResultText").innerHTML = message;
    }
    else {
        document.getElementById("ResultText").className = "failed";
        document.getElementById("ResultText").innerHTML = "Please fix the errors marked in red.";
    }

    return false;   // validation-only

    // ---------- Clear All Errors ----------

    function clearAllErrors() {
        let errors = document.querySelectorAll(".error");

        for (let i = 0; i < errors.length; i++) {
            errors[i].innerHTML = "";
        }

        document.getElementById("ResultText").className = "";
        document.getElementById("ResultText").innerHTML = "";

        makeCaptcha();
    }
}