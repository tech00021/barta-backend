document.addEventListener("DOMContentLoaded", function () {
    const profileMenu = document.getElementById("profile-menu");
    const profileIcon = document.querySelector(".profile-icon");

    // Toggle Profile Menu
    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        profileMenu.classList.toggle("active");
    });

    // Close Profile Menu When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!profileMenu.contains(event.target) && !profileIcon.contains(event.target)) {
            profileMenu.classList.remove("active");
        }
    });

    // Prevent clicks inside the profile menu from closing it
    profileMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

// Logout function with confirmation
function logout() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        window.location.href = "index.html"; // Redirect to landing page
    }
}

// Edit profile function
function editProfile() {
    alert("Edit profile feature (to be implemented)");
}

// Add new friend functionality
function addNewFriend() {
    alert("Feature to add new friend (to be implemented)");
}
