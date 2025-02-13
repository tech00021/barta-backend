document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get user input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        // Simulate sending data to backend (Replace with actual API request)
        let response = await fetch("https://your-backend.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        let result = await response.json();
        if (result.success) {
            alert("Login successful!");
            window.location.href = "chat.html"; // Redirect to chat page
        } else {
            alert("Invalid username or password.");
        }
    });
});
