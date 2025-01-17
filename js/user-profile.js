document.addEventListener("DOMContentLoaded", function () {
  // Load Header and Footer
  fetch("../components/header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header-placeholder").innerHTML = data);

  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);

  // Example: Simulated User Profile Data (Logged-in User)
  const loggedInUser = {
    id: 1,
    name: "Jane Doe",
    role: "Manager",
    department: "IT & Technology Solutions",
    skills: "Cloud Computing, Cybersecurity",
    image: "/assets/images/headshot.jpg",
    bio: "Jane has over 10 years of experience managing IT infrastructure and implementing secure cloud solutions.",
    experience: [
      {
        title: "Manager",
        company: "Simac IT",
        period: "2015 - Present",
        details: "Led cross-functional teams to deliver scalable cloud-based solutions.",
      },
      {
        title: "IT Specialist",
        company: "TechCorp",
        period: "2012 - 2015",
        details: "Implemented security enhancements for enterprise-level IT systems.",
      },
    ],
    projects: ["Cloud Migration Initiative", "Cybersecurity Enhancement Program"],
    certifications: ["AWS Certified Solutions Architect", "CISSP"],
    education: [
      {
        degree: "Master's in Computer Science",
        institution: "University of Amsterdam",
        year: "2012",
      },
      {
        degree: "Bachelor's in Information Technology",
        institution: "University of Rotterdam",
        year: "2010",
      },
    ],
    email: "jane.doe@simac.com",
  };

  // Render Profile Content
  const userProfileContent = `
    <div class="profile-header text-center">
      <img src="${loggedInUser.image}" class="mb-3 rounded-circle" alt="${loggedInUser.name}" style="width: 150px; height: 150px; border: 3px solid #CC142F;">
      <h1>${loggedInUser.name}</h1>
      <p>${loggedInUser.role} | ${loggedInUser.department}</p>
      <p>Email: <a href="mailto:${loggedInUser.email}">${loggedInUser.email}</a></p>
    </div>
    <div class="container mt-4">
      <h2 class="section-title">About Me</h2>
      <p>${loggedInUser.bio}</p>

      <h2 class="section-title">Experience</h2>
      <ul>
        ${loggedInUser.experience.map(exp => `
          <li>
            <strong>${exp.title}</strong> - ${exp.company} (${exp.period})
            <p>${exp.details}</p>
          </li>
        `).join("")}
      </ul>

      <h2 class="section-title">Skills</h2>
      <p>${loggedInUser.skills}</p>

      <h2 class="section-title">Projects</h2>
      <ul>
        ${loggedInUser.projects.map(project => `<li>${project}</li>`).join("")}
      </ul>

      <h2 class="section-title">Certifications</h2>
      <ul>
        ${loggedInUser.certifications.map(cert => `<li>${cert}</li>`).join("")}
      </ul>

      <h2 class="section-title">Education</h2>
      <ul>
        ${loggedInUser.education.map(edu => `
          <li>${edu.degree} from ${edu.institution} (${edu.year})</li>
        `).join("")}
      </ul>
    </div>
  `;
  document.getElementById("userProfileContent").innerHTML = userProfileContent;
});

