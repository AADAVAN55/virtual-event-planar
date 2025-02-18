function goHome() {
    window.location.href = "index.html"; // Redirect to Home Page
}
document.addEventListener("DOMContentLoaded", function() {
    // Event Creation Form
    const eventForm = document.getElementById("event-form");
    if (eventForm) {
        eventForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("event-name").value;
            const date = document.getElementById("event-date").value;
            const time = document.getElementById("event-time").value;
            const description = document.getElementById("event-description").value;

            localStorage.setItem("event", JSON.stringify({ name, date, time, description }));
            alert("Event Created!");
        });
    }
    
    

    // Load Event in Public Event Page
    const eventDetails = document.getElementById("event-details");
    if (eventDetails) {
        const event = JSON.parse(localStorage.getItem("event"));
        if (event) {
            eventDetails.innerHTML = `<h2>${event.name}</h2><p>${event.description}</p><p>${event.date} at ${event.time}</p>`;
        } else {
            eventDetails.innerHTML = "<p>No event found.</p>";
        }
    }

    // Sign Up Form
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            localStorage.setItem("user", JSON.stringify({ email, password }));
            alert("Signup Successful!");
        });
    }
});
