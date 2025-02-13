document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");

    // Redirect to login page (Replace with actual routes)
    loginBtn.addEventListener("click", function () {
        window.location.href = "login.html";
    });

    // Redirect to signup page (Replace with actual routes)
    signupBtn.addEventListener("click", function () {
        window.location.href = "signup.html";
    });
});
