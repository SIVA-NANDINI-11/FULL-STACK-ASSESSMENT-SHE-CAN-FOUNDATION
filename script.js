
// Dark Mode Toggle

function toggleMode() {

    document.body.classList.toggle("dark-mode");

    const btn = document.querySelector(".toggle");

    if(document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
        localStorage.setItem("theme","dark");
    }
    else {
        btn.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("theme","light");
    }
}

// Remember Theme

window.onload = function(){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

        document.querySelector(".toggle").innerHTML =
        "☀️ Light Mode";
    }
}

// Form Submission
document.getElementById("volunteerForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const message =
    document.getElementById("message").value.trim();

    const success =
    document.getElementById("successMessage");

    // Name Validation
    const namePattern = /^[A-Za-z\s]+$/;

    if(!namePattern.test(name)){

        success.style.color = "red";

        success.innerHTML =
        "❌ Name should contain only letters and spaces.";

        return;
    }

    // Email Validation
    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        success.style.color = "red";

        success.innerHTML =
        "❌ Please enter a valid email address.";

        return;
    }

    // Message Validation
    if(message.length < 10){

        success.style.color = "red";

        success.innerHTML =
        "❌ Message should contain at least 10 characters.";

        return;
    }

    success.style.color = "green";

    success.innerHTML =
    "🎉 Thank you for volunteering! Form Submitted Successfully.";

    this.reset();

});