document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const departmentFilter = document.getElementById("departmentFilter");
  const roleFilter = document.getElementById("roleFilter");
  const profilesContainer = document.getElementById("profilesContainer");

  // Render profiles
  function renderProfiles(filter = {}) {
    profilesContainer.innerHTML = "";

    const filteredProfiles = employees.filter(profile => {
      const matchesSearch =
        !filter.search ||
        profile.name.toLowerCase().includes(filter.search) ||
        profile.skills.toLowerCase().includes(filter.search);
      const matchesDepartment =
        !filter.department || profile.department === filter.department;
      const matchesRole =
        !filter.role || profile.role === filter.role;

      return matchesSearch && matchesDepartment && matchesRole;
    });

    if (filteredProfiles.length === 0) {
      profilesContainer.innerHTML = `<p class="text-center">No results found.</p>`;
      return;
    }

    filteredProfiles.forEach(profile => {
      const card = `
        <div class="col-md-4">
          <div class="profile-card">
            <img src="${profile.image}" alt="${profile.name}">
            <div class="p-3">
              <h5>${profile.name}</h5>
              <p><strong>Role:</strong> ${profile.role}</p>
              <p><strong>Department:</strong> ${profile.department}</p>
              <p><strong>Skills:</strong> ${profile.skills}</p>
              <a href="profile.html?id=${profile.id}" class="btn btn-outline-primary w-100">View Profile</a>
            </div>
          </div>
        </div>
      `;
      profilesContainer.insertAdjacentHTML("beforeend", card);
    });
  }

  // Initial render
  renderProfiles();

  // Event listeners for filters
  searchInput.addEventListener("input", () => {
    renderProfiles({
      search: searchInput.value.toLowerCase(),
      department: departmentFilter.value,
      role: roleFilter.value,
    });
  });

  departmentFilter.addEventListener("change", () => {
    renderProfiles({
      search: searchInput.value.toLowerCase(),
      department: departmentFilter.value,
      role: roleFilter.value,
    });
  });

  roleFilter.addEventListener("change", () => {
    renderProfiles({
      search: searchInput.value.toLowerCase(),
      department: departmentFilter.value,
      role: roleFilter.value,
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("components/header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header-placeholder").innerHTML = data);

  // Load Footer
  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);

  // "Get Started" Button Event
  document.getElementById("getStartedBtn").addEventListener("click", function () {
    const isLoggedIn = true; // Replace with actual authentication check
    const redirectUrl = isLoggedIn ? "pages/connect.html" : "pages/login.html";
    window.location.href = redirectUrl;
  });
});
