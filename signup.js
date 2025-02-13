document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const usernameInput = document.getElementById("username");
    const usernameStatus = document.getElementById("username-status");

    // Function to check username availability
    async function checkUsername(username) {
        if (username.length < 3) {
            usernameStatus.textContent = "Username must be at least 3 characters.";
            usernameStatus.style.color = "red";
            return false;
        }

        // Simulate backend check (replace with actual API call)
        let response = await fetch(`https://your-backend.com/check-username?username=${username}`);
        let data = await response.json();

        if (data.available) {
            usernameStatus.textContent = "Username is available!";
            usernameStatus.style.color = "green";
            return true;
        } else {
            usernameStatus.textContent = "Username is already taken.";
            usernameStatus.style.color = "red";
            return false;
        }
    }

    // Event listener for username input
    usernameInput.addEventListener("input", function () {
        checkUsername(usernameInput.value);
    });

    // Handle form submission
    signupForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get user input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const username = usernameInput.value;
        const password = document.getElementById("password").value;
        const profilePic = document.getElementById("profile-pic").files[0];

        // Simple validation
        if (!name || !email || !username || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Check username availability before submitting
        const isUsernameValid = await checkUsername(username);
        if (!isUsernameValid) {
            alert("Please choose a different username.");
            return;
        }

        // Simulate sending data to backend (Replace with actual API request)
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        if (profilePic) {
            formData.append("profilePic", profilePic);
        }

        let response = await fetch("https://your-backend.com/signup", {
            method: "POST",
            body: formData,
        });

        let result = await response.json();
        if (result.success) {
            alert("Signup successful! Please check your email for verification.");
            window.location.href = "index.html"; // Redirect to home after signup
        } else {
            alert("Signup failed. Please try again.");
        }
    });
});
