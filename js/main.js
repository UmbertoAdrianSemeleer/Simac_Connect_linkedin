document.addEventListener("DOMContentLoaded", function () {
  const getStartedBtn = document.getElementById("getStartedBtn");

  // Simulated login state (Replace this with real authentication logic)
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  getStartedBtn.addEventListener("click", function () {
    if (isLoggedIn) {
      // Redirect to Connect Page
      window.location.href = "/pages/connect.html";
    } else {
      // Redirect to Login Page
      window.location.href = "/pages/profile.html";
    }
  });
});
