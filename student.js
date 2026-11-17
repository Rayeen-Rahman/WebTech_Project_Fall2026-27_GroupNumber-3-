console.log("Student.js Connected");

var events = [
    {
        name: "Tech Seminar 2026",
        category: "Seminar",
        date: "12 November 2026",
        venue: "Auditorium"
    },
    {
        name: "Football Tournament",
        category: "Sports",
        date: "15 November 2026",
        venue: "University Ground"
    },
    {
        name: "Web Development Workshop",
        category: "Workshop",
        date: "20 November 2026",
        venue: "Computer Lab"
    },
    {
        name: "Cultural Night",
        category: "Cultural",
        date: "25 November 2026",
        venue: "University Auditorium"
    }
];

function showPage(pageName) {
    var pages = document.getElementsByClassName("page");

    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(pageName).style.display = "block";

    if (pageName == "events") {
        searchEvents();
    }
}

function validateStudentForm() {
    clearAllErrors();

    var validName = validateName("StudentName", "NameError");
    var validID = validateID("StudentID", "IDError");
    var validEmail = validateEmail("StudentEmail", "EmailError");
    var validPhone = validatePhone("StudentPhone", "PhoneError");
    var validDepartment = validateDepartment("Department", "DepartmentError");
    var validPassword = validatePassword("Password", "PasswordError");
    var validConfirm = validateConfirmPassword("Password", "ConfirmPassword", "ConfirmError");

    var isValid = validName && validID && validEmail && validPhone &&
                  validDepartment && validPassword && validConfirm;

    if (isValid) {
        document.getElementById("ResultText").innerHTML =
            "Registration form submitted successfully!";
        document.getElementById("ResultText").className = "success";
    } else {
        document.getElementById("ResultText").innerHTML = "";
    }

    return false;
}

function validateName(inputID, errorID) {
    var name = document.getElementById(inputID).value.trim();

    if (name.length < 3) {
        document.getElementById(errorID).innerHTML = "Enter a valid name.";
        return false;
    }

    return true;
}

function validateID(inputID, errorID) {
    var id = document.getElementById(inputID).value.trim();

    if (id == "") {
        document.getElementById(errorID).innerHTML = "Enter Student ID.";
        return false;
    }

    return true;
}

function validateEmail(inputID, errorID) {
    var email = document.getElementById(inputID).value.trim();
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        document.getElementById(errorID).innerHTML = "Enter a valid email.";
        return false;
    }

    return true;
}

function validatePhone(inputID, errorID) {
    var phone = document.getElementById(inputID).value.trim();
    var pattern = /^\+?[0-9]{10,15}$/;

    if (!pattern.test(phone)) {
        document.getElementById(errorID).innerHTML = "Enter a valid phone number.";
        return false;
    }

    return true;
}

function validateDepartment(inputID, errorID) {
    var department = document.getElementById(inputID).value;

    if (department == "") {
        document.getElementById(errorID).innerHTML = "Select your department.";
        return false;
    }

    return true;
}

function validatePassword(inputID, errorID) {
    var password = document.getElementById(inputID).value;
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    if (!pattern.test(password)) {
        document.getElementById(errorID).innerHTML =
            "Password must contain 8 characters, uppercase, lowercase and number.";
        return false;
    }

    return true;
}

function validateConfirmPassword(passwordID, confirmID, errorID) {
    var password = document.getElementById(passwordID).value;
    var confirm = document.getElementById(confirmID).value;

    if (confirm == "" || password != confirm) {
        document.getElementById(errorID).innerHTML = "Passwords do not match.";
        return false;
    }

    return true;
}

function clearAllErrors() {
    var errors = document.getElementsByClassName("error");

    for (var i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    document.getElementById("ResultText").innerHTML = "";
    document.getElementById("ResultText").className = "";
}

function loginStudent() {
    clearLoginErrors();

    var validID = validateID("LoginID", "LoginIDError");
    var validPassword = validateLoginPassword("LoginPassword", "LoginPasswordError");

    var isValid = validID && validPassword;

    if (isValid) {
        document.getElementById("LoginResult").innerHTML =
            "Login form submitted successfully!";
        document.getElementById("LoginResult").className = "success";
    }

    return false;
}

function validateLoginPassword(inputID, errorID) {
    var password = document.getElementById(inputID).value;

    if (password == "") {
        document.getElementById(errorID).innerHTML = "Enter password.";
        return false;
    }

    return true;
}

function clearLoginErrors() {
    document.getElementById("LoginIDError").innerHTML = "";
    document.getElementById("LoginPasswordError").innerHTML = "";
    document.getElementById("LoginResult").innerHTML = "";
    document.getElementById("LoginResult").className = "";
}

function searchEvents() {
    var search = document.getElementById("SearchEvent").value.toLowerCase();
    var category = document.getElementById("CategoryFilter").value;
    var list = document.getElementById("EventList");
    var count = 0;

    list.innerHTML = "";

    for (var i = 0; i < events.length; i++) {
        if (events[i].name.toLowerCase().includes(search) &&
            (category == "All" || events[i].category == category)) {

            list.innerHTML += `
                <div class="event-card">
                    <h3>${events[i].name}</h3>
                    <p><b>Category:</b> ${events[i].category}</p>
                    <p><b>Date:</b> ${events[i].date}</p>
                    <p><b>Venue:</b> ${events[i].venue}</p>
                </div>
            `;

            count++;
        }
    }

    document.getElementById("EventResult").innerHTML =
        count == 0 ? "No events found." : count + " event(s) found.";
}

showPage("login");