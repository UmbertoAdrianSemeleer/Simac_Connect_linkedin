// Sample Employee Data
const employeeData = {
  retail_manager: {
    name: "John Doe",
    role: "Retail Manager",
    department: "Retail",
    employeesManaged: 3,
    projects: ["Inventory Management", "POS Upgrade"],
    skills: ["Leadership", "Communication"]
  },
  tech_emp1: {
    name: "Chris Wilson",
    role: "Tech Employee 1",
    department: "Technology",
    employeesManaged: 0,
    projects: ["JavaScript Refactoring"],
    skills: ["JavaScript", "C++"]
  }
};

// Function to Get Query Parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Populate Profile Page
function populateProfile() {
  const profileId = getQueryParam('id'); // Get the ID from the URL
  const profile = employeeData[profileId]; // Get the profile data for the ID

  if (profile) {
    document.getElementById('profile-name').innerText = profile.name;
    document.getElementById('profile-role').innerText = profile.role;
    document.getElementById('profile-department').innerText = profile.department;
    document.getElementById('profile-employees').innerText = profile.employeesManaged || "N/A";
    document.getElementById('profile-projects').innerText = profile.projects.join(', ') || "N/A";
    document.getElementById('profile-skills').innerText = profile.skills.join(', ') || "N/A";
  } else {
    document.getElementById('profile-container').innerHTML = `
      <h1>Profile Not Found</h1>
      <a href="index.html" class="back-button">Back to Graph</a>
    `;
  }
}

// Call the Function on Page Load
populateProfile();
