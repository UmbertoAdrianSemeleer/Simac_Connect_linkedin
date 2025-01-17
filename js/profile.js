document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("../components/header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header-placeholder").innerHTML = data);

  // Load Footer
  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);

  // Extract the `id` from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const profileId = parseInt(urlParams.get("id"));

  // Find the corresponding employee profile
  const profile = employees.find(emp => emp.id === profileId);

  if (!profile) {
    document.getElementById("profileContent").innerHTML = `
      <p class="text-center">Profile not found. <a href="connect.html">Back to Connect</a></p>
    `;
    return;
  }document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const profileId = parseInt(urlParams.get("id"));
  
    const profile = employees.find(emp => emp.id === profileId);
  
    if (!profile) {
      document.getElementById("profileContent").innerHTML = `
        <p class="text-center">Profile not found. <a href="connect.html">Back to Connect</a></p>
      `;
      return;
    }
  
    const profileContent = `
      <div class="profile-header">
        <img src="${profile.image}" alt="${profile.name}">
        <h1>${profile.name}</h1>
        <p>${profile.role} | ${profile.department}</p>
        <p>Email: <a href="mailto:${profile.email}">${profile.email}</a></p>
      </div>
      <div class="container mt-4">
        <h2 class="section-title">About</h2>
        <p>${profile.bio}</p>
        
        <h2 class="section-title">Experience</h2>
        <ul>
          ${profile.experience.map(
            exp => `
              <li>
                <strong>${exp.title}</strong> - ${exp.company} (${exp.period})
                <p>${exp.details}</p>
              </li>
            `
          ).join("")}
        </ul>
        
        <h2 class="section-title">Skills</h2>
        <p>${profile.skills}</p>
        
        <h2 class="section-title">Projects</h2>
        <ul>
          ${profile.projects.map(project => `<li>${project}</li>`).join("")}
        </ul>
        
        <h2 class="section-title">Certifications</h2>
        <ul>
          ${profile.certifications.map(cert => `<li>${cert}</li>`).join("")}
        </ul>
        
        <h2 class="section-title">Education</h2>
        <ul>
          ${profile.education.map(
            edu => `<li>${edu.degree} from ${edu.institution} (${edu.year})</li>`
          ).join("")}
        </ul>
      </div>
    `;
    document.getElementById("profileContent").innerHTML = profileContent;
  });
  

  // Render the profile content dynamically
  const profileContent = `
    <div class="profile-header text-center">
      <img src="${profile.image}" class="mb-3 rounded-circle" alt="${profile.name}" style="width: 150px; height: 150px; border: 3px solid #CC142F;">
      <h1>${profile.name}</h1>
      <p>${profile.role} | ${profile.department}</p>
      <p>Email: <a href="mailto:${profile.email}">${profile.email}</a></p>
    </div>
    <div class="container mt-4">
      <h2 class="section-title">About</h2>
      <p>${profile.bio}</p>

      <h2 class="section-title">Skills</h2>
      <p>${profile.skills}</p>

      <h2 class="section-title">Projects</h2>
      <ul>
        ${profile.projects.map(project => `<li>${project}</li>`).join("")}
      </ul>
    </div>
  `;
  document.getElementById("profileContent").innerHTML = profileContent;
});
