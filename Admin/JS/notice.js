// ---------- Validate Notice ----------

function validateNotice() {
    clearAllErrors();

    let NoticeTitle = document.getElementById("NoticeTitle").value.trim();
    let TargetAudience = document.getElementById("TargetAudience").value;
    let Priority = document.getElementById("Priority").value;
    let PublishDate = document.getElementById("PublishDate").value;
    let ExpiryDate = document.getElementById("ExpiryDate").value;
    let NoticeMessage = document.getElementById("NoticeMessage").value.trim();

    let valid = true;

    if (NoticeTitle === "") {
        document.getElementById("NoticeTitleError").innerHTML = "Please enter the notice title";
        valid = false;
    }

    if (TargetAudience === "") {
        document.getElementById("TargetAudienceError").innerHTML = "Please select the target audience";
        valid = false;
    }

    if (Priority === "") {
        document.getElementById("PriorityError").innerHTML = "Please select the priority";
        valid = false;
    }

    if (PublishDate === "") {
        document.getElementById("PublishDateError").innerHTML = "Please select the publish date";
        valid = false;
    }

    if (ExpiryDate === "") {
        document.getElementById("ExpiryDateError").innerHTML = "Please select the expiry date";
        valid = false;
    }
    else if (PublishDate !== "" && ExpiryDate < PublishDate) {
        document.getElementById("ExpiryDateError").innerHTML = "Expiry date cannot be before publish date";
        valid = false;
    }

    if (NoticeMessage === "") {
        document.getElementById("NoticeMessageError").innerHTML = "Please enter the notice message";
        valid = false;
    }

    let result = document.getElementById("ResultText");

    if (valid) {
        result.className = "success";
        result.innerHTML = "Notice form is valid!";
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
