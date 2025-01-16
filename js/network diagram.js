// Employee and connection data
const employees = [
  { id: '1', name: 'John Doe', department: 'IT & Technology Solutions', skills: ['Cloud Computing', 'Cybersecurity'] },
  { id: '2', name: 'Emily White', department: 'IT & Technology Solutions', skills: ['DevOps', 'Cloud Architecture'] },
  { id: '3', name: 'Alice Brown', department: 'Software Development', skills: ['Python', 'Machine Learning'] },
  { id: '4', name: 'Robert Green', department: 'Cybersecurity', skills: ['Cybersecurity', 'Forensics'] },
  { id: '5', name: 'Lucy Black', department: 'Marketing & Communications', skills: ['Content Strategy', 'Social Media'] },
];

const connections = [
  { source: '1', target: '2' },
  { source: '2', target: '3' },
  { source: '3', target: '4' },
  { source: '1', target: '5' },
];

// Initialize Cytoscape.js
const cy = cytoscape({
  container: document.getElementById('network-diagram'),
  elements: [],
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#66b2ff',
        label: 'data(name)',
        'text-valign': 'center',
        'text-halign': 'center',
        'width': '50px',
        'height': '50px',
        'font-size': '10px',
        'color': '#fff',
      },
    },
    {
      selector: 'edge',
      style: {
        width: 2,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
      },
    },
    {
      selector: '.highlighted',
      style: {
        'background-color': '#ff6666',
        'line-color': '#ff6666',
        'target-arrow-color': '#ff6666',
      },
    },
  ],
  layout: { name: 'breadthfirst', padding: 10 },
});

// Function to update the diagram based on filters
function updateDiagram(filteredEmployees) {
  const nodes = filteredEmployees.map(emp => ({
    data: { id: emp.id, name: emp.name },
  }));

  const edges = connections.filter(conn =>
    filteredEmployees.find(emp => emp.id === conn.source) &&
    filteredEmployees.find(emp => emp.id === conn.target)
  ).map(conn => ({ data: conn }));

  cy.elements().remove(); // Clear existing elements
  cy.add([...nodes, ...edges]); // Add new elements
  cy.layout({ name: 'breadthfirst', padding: 10 }).run();
}

// Filter employees and update the diagram
function filterEmployees() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const departmentValue = document.getElementById('departmentFilter').value.toLowerCase();
  const skillsValue = document.getElementById('advancedFilter').value.toLowerCase();

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchValue);
    const matchesDepartment = !departmentValue || emp.department.toLowerCase() === departmentValue;
    const matchesSkills = !skillsValue || emp.skills.some(skill => skill.toLowerCase().includes(skillsValue));
    return matchesSearch && matchesDepartment && matchesSkills;
  });

  updateDiagram(filteredEmployees);
}

// Attach event listeners for filters
document.getElementById('searchInput').addEventListener('input', filterEmployees);
document.getElementById('departmentFilter').addEventListener('change', filterEmployees);
document.getElementById('advancedFilter').addEventListener('change', filterEmployees);

// Initialize the diagram with all employees
updateDiagram(employees);
