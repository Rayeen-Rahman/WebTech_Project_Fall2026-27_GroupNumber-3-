// ---------- Toggle Rejection Reason ----------

function toggleReason()
{
    let Decision = document.getElementById("Decision").value;
    let Reason   = document.getElementById("Reason");

    if (Decision === "Approve")
    {
        Reason.disabled = true;
        Reason.value = "";
        document.getElementById("ReasonError").innerHTML = "";
    }
    else
    {
        Reason.disabled = false;
    }
}

// ---------- Validate Review ----------

function validateReview()
{
    clearAllErrors();

    let EventID        = document.getElementById("EventID").value.trim();
    let EventTitle     = document.getElementById("EventTitle").value.trim();
    let OrganizerEmail = document.getElementById("OrganizerEmail").value.trim();
    let Decision       = document.getElementById("Decision").value;
    let Reason         = document.getElementById("Reason").value.trim();

    let valid = true;

    if (EventID === "")
    {
        document.getElementById("EventIDError").innerHTML = "Please enter the Event ID";
        valid = false;
    }
    else if (!/^EVT-[0-9]{4}$/i.test(EventID))
    {
        document.getElementById("EventIDError").innerHTML = "Event ID must look like EVT-1234";
        valid = false;
    }

    if (EventTitle === "")
    {
        document.getElementById("EventTitleError").innerHTML = "Please enter the Event Title";
        valid = false;
    }

    if (OrganizerEmail === "")
    {
        document.getElementById("OrganizerEmailError").innerHTML = "Please enter the Organizer Email";
        valid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(OrganizerEmail))
    {
        document.getElementById("OrganizerEmailError").innerHTML = "Please enter a valid email";
        valid = false;
    }

    if (Decision === "")
    {
        document.getElementById("DecisionError").innerHTML = "Please select a decision";
        valid = false;
    }

    if (Decision === "Reject" && Reason === "")
    {
        document.getElementById("ReasonError").innerHTML = "Please provide a rejection reason";
        valid = false;
    }

    let result = document.getElementById("ResultText");

    if (valid)
    {
        result.className = "success";
        result.innerHTML = "Event review submitted successfully!";
    }
    else
    {
        result.className = "failed";
        result.innerHTML = "Please fix the errors marked in red.";
    }

    return false;   // validation-only: no server yet
}

// ---------- Clear All Errors ----------

function clearAllErrors()
{
    let errors = document.querySelectorAll(".error");

    for (let i = 0; i < errors.length; i++)
    {
        errors[i].innerHTML = "";
    }

    let result = document.getElementById("ResultText");
    result.className = "";
    result.innerHTML = "";

    document.getElementById("Reason").disabled = false;
}
