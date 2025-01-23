// Initialize Cytoscape Graph
const cy = cytoscape({
  container: document.getElementById('company-graph'),

  elements: {
    nodes: [
      // Central Node
      { data: { id: 'simac', label: 'Simac', icon: '🏢', size: 'large' } },

      // Department Nodes
      { data: { id: 'retail', label: 'Retail Department', icon: '🛒', size: 'medium' } },
      { data: { id: 'technology', label: 'Technology Department', icon: '🖥️', size: 'medium' } },
      { data: { id: 'logistics', label: 'Logistics Department', icon: '🚚', size: 'medium' } },
      { data: { id: 'cybersecurity', label: 'Cybersecurity Department', icon: '🔒', size: 'medium' } },
      { data: { id: 'healthcare', label: 'Healthcare Department', icon: '🏥', size: 'medium' } },

      // Retail Department Employees
      { data: { id: 'retail_manager', label: 'John Doe (Retail Manager)', icon: '👨‍💼', department: 'retail', role: 'manager', employeeCount: 3 } },
      { data: { id: 'retail_emp1', label: 'Jane Smith (Retail Employee 1)', icon: '👩‍💼', department: 'retail', role: 'employee', projects: ['POS Upgrade'] } },
      { data: { id: 'retail_emp2', label: 'Emily Johnson (Retail Employee 2)', icon: '👩‍💼', department: 'retail', role: 'employee', projects: ['Customer Data Analysis'] } },
      { data: { id: 'retail_emp3', label: 'Michael Brown (Retail Employee 3)', icon: '👨‍💼', department: 'retail', role: 'employee', projects: ['POS Upgrade', 'Inventory Management'] } },

      // Technology Department Employees
      { data: { id: 'tech_manager', label: 'Alice Davis (Tech Manager)', icon: '👩‍💼', department: 'technology', role: 'manager', employeeCount: 4 } },
      { data: { id: 'tech_emp1', label: 'Chris Wilson (Tech Employee 1)', icon: '👨‍💻', department: 'technology', role: 'employee', skills: ['JavaScript', 'C++'] } },
      { data: { id: 'tech_emp2', label: 'Sarah Martinez (Tech Employee 2)', icon: '👩‍💻', department: 'technology', role: 'employee', skills: ['Python', 'Data Science'] } },
      { data: { id: 'tech_emp3', label: 'James Anderson (Tech Employee 3)', icon: '👨‍💻', department: 'technology', role: 'employee', skills: ['Networking', 'Security'] } },
      { data: { id: 'tech_emp4', label: 'Olivia Thomas (Tech Employee 4)', icon: '👩‍💻', department: 'technology', role: 'employee', skills: ['Cloud Computing', 'DevOps'] } },

      // Logistics Department Employees
      { data: { id: 'logistics_manager', label: 'Robert Jackson (Logistics Manager)', icon: '👨‍💼', department: 'logistics', role: 'manager', employeeCount: 2 } },
      { data: { id: 'logistics_emp1', label: 'Sophia White (Logistics Employee 1)', icon: '👩‍💼', department: 'logistics', role: 'employee' } },
      { data: { id: 'logistics_emp2', label: 'Liam Harris (Logistics Employee 2)', icon: '👨‍💼', department: 'logistics', role: 'employee' } },

      // Cybersecurity Department Employees
      { data: { id: 'cybersec_manager', label: 'Isabella Martin (Cybersecurity Manager)', icon: '👩‍💼', department: 'cybersecurity', role: 'manager', employeeCount: 3 } },
      { data: { id: 'cybersec_emp1', label: 'Lucas Clark (Cybersecurity Employee 1)', icon: '👨‍💻', department: 'cybersecurity', role: 'employee' } },
      { data: { id: 'cybersec_emp2', label: 'Mia Lewis (Cybersecurity Employee 2)', icon: '👩‍💻', department: 'cybersecurity', role: 'employee' } },
      { data: { id: 'cybersec_emp3', label: 'Benjamin Walker (Cybersecurity Employee 3)', icon: '👨‍💻', department: 'cybersecurity', role: 'employee' } },

      // Healthcare Department Employees
      { data: { id: 'healthcare_manager', label: 'Evelyn Hall (Healthcare Manager)', icon: '👩‍⚕️', department: 'healthcare', role: 'manager', employeeCount: 2 } },
      { data: { id: 'healthcare_emp1', label: 'Ella Allen (Healthcare Employee 1)', icon: '👩‍⚕️', department: 'healthcare', role: 'employee' } },
      { data: { id: 'healthcare_emp2', label: 'Henry Young (Healthcare Employee 2)', icon: '👨‍⚕️', department: 'healthcare', role: 'employee' } },
    ],

    edges: [
      // Connections to Simac
      { data: { source: 'simac', target: 'retail' } },
      { data: { source: 'simac', target: 'technology' } },
      { data: { source: 'simac', target: 'logistics' } },
      { data: { source: 'simac', target: 'cybersecurity' } },
      { data: { source: 'simac', target: 'healthcare' } },

      // Retail Department Relationships
      { data: { source: 'retail', target: 'retail_manager' } },
      { data: { source: 'retail_manager', target: 'retail_emp1' } },
      { data: { source: 'retail_manager', target: 'retail_emp2' } },
      { data: { source: 'retail_manager', target: 'retail_emp3' } },

      // Technology Department Relationships
      { data: { source: 'technology', target: 'tech_manager' } },
      { data: { source: 'tech_manager', target: 'tech_emp1' } },
      { data: { source: 'tech_manager', target: 'tech_emp2' } },
      { data: { source: 'tech_manager', target: 'tech_emp3' } },
      { data: { source: 'tech_manager', target: 'tech_emp4' } },

      // Logistics Department Relationships
      { data: { source: 'logistics', target: 'logistics_manager' } },
      { data: { source: 'logistics_manager', target: 'logistics_emp1' } },
      { data: { source: 'logistics_manager', target: 'logistics_emp2' } },

      // Cybersecurity Department Relationships
      { data: { source: 'cybersecurity', target: 'cybersec_manager' } },
      { data: { source: 'cybersec_manager', target: 'cybersec_emp1' } },
      { data: { source: 'cybersec_manager', target: 'cybersec_emp2' } },
      { data: { source: 'cybersec_manager', target: 'cybersec_emp3' } },

      // Healthcare Department Relationships
      { data: { source: 'healthcare', target: 'healthcare_manager' } },
      { data: { source: 'healthcare_manager', target: 'healthcare_emp1' } },
      { data: { source: 'healthcare_manager', target: 'healthcare_emp2' } },
    ],
  },

  style: [
    {
      selector: 'node',
      style: {
        label: 'data(icon)', // Use icons for nodes
        'background-color': ele => {
          const deptColors = {
            simac: '#1E90FF',
            retail: '#FF69B4',
            technology: '#FF851B',
            logistics: '#2ECC40',
            cybersecurity: '#B10DC9',
            healthcare: '#FF4136',
          };
          return deptColors[ele.data('id')] || deptColors[ele.data('department')] || '#7FDBFF';
        },
        'text-valign': 'center',
        'text-halign': 'center',
        'font-size': '20px',
        color: '#fff',
        width: ele => (ele.data('size') === 'large' ? 100 : ele.data('size') === 'medium' ? 60 : 30),
        height: ele => (ele.data('size') === 'large' ? 100 : ele.data('size') === 'medium' ? 60 : 30),
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
  ],

  layout: { name: 'cose', animate: true },
});

// Filter Functionality
function applyFilters() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const departmentValue = document.getElementById('department').value;
  const roleValue = document.getElementById('role').value;

  cy.nodes().forEach(node => {
    const matchesSearch = node.data('label').toLowerCase().includes(searchValue);
    const matchesDepartment = departmentValue === 'all' || node.data('department') === departmentValue;
    const matchesRole = roleValue === 'all' || node.data('role') === roleValue;

    node.style('display', matchesSearch && matchesDepartment && matchesRole ? 'element' : 'none');
  });

  cy.edges().forEach(edge => {
    const sourceVisible = edge.source().style('display') === 'element';
    const targetVisible = edge.target().style('display') === 'element';
    edge.style('display', sourceVisible && targetVisible ? 'element' : 'none');
  });
}

// Event Listeners for Filters
document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('department').addEventListener('change', applyFilters);
document.getElementById('role').addEventListener('change', applyFilters);

// Node Click Event Listener for Details Panel
cy.on('tap', 'node', function (evt) {
  const node = evt.target;

  // Update the details panel with node data
  document.getElementById('details-name').innerText = `Name: ${node.data('label') || 'N/A'}`;
  document.getElementById('details-role').innerText = `Role: ${node.data('role') || 'N/A'}`;
  document.getElementById('details-department').innerText = `Department: ${node.data('department') || 'N/A'}`;
  document.getElementById('details-employees').innerText = `Employees Managed: ${node.data('employeeCount') || 'N/A'}`;

  // Show the "View Full Profile" button and attach redirection
  const viewProfileButton = document.getElementById('view-profile');
  if (node.data('id')) {
    viewProfileButton.style.display = 'block';
    viewProfileButton.onclick = () => {
      const profileId = node.data('id'); // Use the node's unique ID
      window.location.href = `test_profile.html?id=${profileId}`;
    };
  } else {
    viewProfileButton.style.display = 'none'; // Hide button if no profile is available
  }
});
