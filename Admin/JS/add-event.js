// ---------- Validate Add Event ----------

function validateEvent() {
    clearAllErrors();

    let EventTitle = document.getElementById("EventTitle").value.trim();
    let EventDate = document.getElementById("EventDate").value;
    let EventTime = document.getElementById("EventTime").value;
    let Venue = document.getElementById("Venue").value.trim();
    let Category = document.getElementById("Category").value;
    let AvailableSeats = document.getElementById("AvailableSeats").value;
    let Description = document.getElementById("Description").value.trim();

    let valid = true;

    if (EventTitle === "") {
        document.getElementById("EventTitleError").innerHTML = "Please enter the event title";
        valid = false;
    }

    if (EventDate === "") {
        document.getElementById("EventDateError").innerHTML = "Please select the event date";
        valid = false;
    }
    else if (EventDate < new Date().toISOString().split("T")[0]) {
        document.getElementById("EventDateError").innerHTML = "Event date cannot be in the past";
        valid = false;
    }

    if (EventTime === "") {
        document.getElementById("EventTimeError").innerHTML = "Please select the event time";
        valid = false;
    }

    if (Venue === "") {
        document.getElementById("VenueError").innerHTML = "Please enter the event venue";
        valid = false;
    }

    if (Category === "") {
        document.getElementById("CategoryError").innerHTML = "Please select an event category";
        valid = false;
    }

    if (AvailableSeats === "") {
        document.getElementById("AvailableSeatsError").innerHTML = "Please enter available seats";
        valid = false;
    }
    else if (Number(AvailableSeats) <= 0 || !Number.isInteger(Number(AvailableSeats))) {
        document.getElementById("AvailableSeatsError").innerHTML = "Available seats must be a positive whole number";
        valid = false;
    }

    if (Description === "") {
        document.getElementById("DescriptionError").innerHTML = "Please enter the event description";
        valid = false;
    }

    let result = document.getElementById("ResultText");

    if (valid) {
        result.className = "success";
        result.innerHTML = "Event form is valid!";
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
